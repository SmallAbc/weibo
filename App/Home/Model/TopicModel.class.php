<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/16
 * Time: 21:42
 */

namespace Home\Model;


use Think\Model\RelationModel;
use function count;
use function D;
use function date;
use function get_client_ip;
use function is_null;
use function json_decode;
use function mb_strlen;
use function preg_match_all;
use function preg_replace;
use function session;
use function sleep;
use function strtotime;
use function substr;

class TopicModel extends RelationModel
{
    //自动完成
    protected $_auto=array(
        array('create_date','time',self::MODEL_INSERT,'function')
    );

    //自动验证
    protected $_validate=array(
        //-1,验证微博长度
        array('allcontent','10,280',-1,self::EXISTS_VALIDATE,'length')

    );



    //一对多微博获取关联
    protected $_link=array(
        'image'=>array(
            'mapping_type'=>self::HAS_MANY,
            'class_name'=>'Image',
            'foreign_key'=>'tid',
            'mapping_fields'=>'data'
        )
    );

    //解析图片json数据
    public function format($list){
        foreach ($list as $key=>$value){
            if (!is_null($value['image'])){
                foreach ($value['image'] as $key2=>$value2){
                    $value['image'][$key2]=json_decode($value2['data'],true);
                }
            }
            if(!is_null($value['face'])){
                $value['face']=json_decode($value['face'],true);
            }
            $list[$key]=$value;
            $list[$key]['count']=count($value['image']);
            $time=NOW_TIME-$value['create_date'];
            if($time<60){
                $list[$key]['time']='刚刚';
            }elseif ($time<60*60){
                $list[$key]['time']=floor($time/60).'分钟前';
            }elseif (date('Y-m-d')==date('Y-m-d',$value['create_date'])){
                $list[$key]['time']='今天'.date('H:i',$value['create_date']);
            }elseif (date('Y-m-d',strtotime('-1 day'))==date('Y-m-d',$value['create_date'])){
                $list[$key]['time']='昨天'.date('H:i',$value['create_date']);
            }elseif (date('Y')==date('Y',$value['create_date'])){
                $list[$key]['time']=date('m月d日 H:i',$value['create_date']);
            }else{
                $list[$key]['time']=date('Y年m月d日 H:i:s',$value['create_date']);
            }
            $list[$key]['content'].=$list[$key]['content_over'];
            //在结尾加个空格,以便在末尾的@可以被找到
            $list[$key]['content'].=' ';
            $list[$key]['content']=preg_replace('/\[(a|b|c|d)([0-9]+)\]/i','<img src="'.__ROOT__.'/public/home/face/$1/$2.gif" border="0">',$list[$key]['content']);

            //textarea转发内容部分不用加上a标签.所以在转换之前预留一份数据
            $list[$key]['textarea']=$list[$key]['content'];
            $list[$key]['content']=preg_replace('/(@\S+)\s/i','<a class="space" href="assignByAjax">$1</a>',$list[$key]['content']);

        }
        return $list;
    }
    //获取多个微博数据
    public function getUser($first=0, $size=10){
        $topiclist=$this ->relation(true)
                                ->table('__TOPIC__ a,__USER__ b')
                                ->field('a.id,a.content,a.content_over,a.create_date,a.uid,a.rid,b.username,b.face,b.domain')
                                ->limit($first,$size)
                                ->order('create_date DESC')
                                ->where('a.uid=b.id')
                                ->select();

        return $this->format($topiclist);
    }

    //获取单个微博数据
    public function getOneTopic($id){
        $map['a.id']=$id;
        $onelist=$this ->relation(true)
            ->table('__TOPIC__ a,__USER__ b')
            ->field('a.id,a.content,a.content_over,a.create_date,a.uid,a.rid,b.username,b.face,b.domain')
            ->limit(0,1)
            ->where('b.id=a.uid')
            ->where($map)
            ->select();

        return $this->format($onelist);
    }


    //发布微博
    public function publish($allcontent,$uid){
        $len=mb_strlen($allcontent,'utf-8');
        if ($len>255){
            $content=mb_substr($allcontent,0,255,'utf-8');
            $content_over=mb_substr($allcontent,255,280,'utf-8');
        }else{
            $content=$allcontent;
            $content_over='';
        }
        $data=array(
          'content'=>$content,
            'uid'=>$uid,
            'ip'=>get_client_ip(1)
        );
        if(!empty($content_over)){
            $data['content_over']=$content_over;
        }
        if($this->create($data)){
            //微博发布完成
            sleep(2);
            $tid=$this->add();
            //过滤@信息
            $this->refer($allcontent,$tid);
            return $tid?$tid:0;
        }else{
            return $this->getError();
        }
    }

    //转发微博
    public function forward($rid,$allcontent){
        $len=mb_strlen($allcontent,'utf-8');
        if ($len>255){
            $content=mb_substr($allcontent,0,255,'utf-8');
            $content_over=mb_substr($allcontent,255,280,'utf-8');
        }else{
            $content=$allcontent;
            $content_over='';
        }
        $data=array(
            'content'=>$content,
            'uid'=>session('user_auth')['id'],
            'rid'=>$rid,
            'ip'=>get_client_ip(1)
        );
        if(!empty($content_over)){
            $data['content_over']=$content_over;
        }
        if($this->create($data)){
            $uid=$this->add();
            $this->setForwardCount($rid);
            sleep(2);
            return $uid?$uid:0;
        }else{
            return $this->getError();
        }

    }




    //更新主微博的被转发次数
    private function setForwardCount($rid){
        $map['id']=$rid;
        $this->where($map)->setInc('forward_count');
    }

    //更新主微博的被评论次数
    public function setCommentCount($rid){
        $map['id']=$rid;
        $this->where($map)->setInc('comment_count');
    }



    //@信息提取
    public function refer($content,$tid){
        $pattern='/(@\S+)\s/i';
        preg_match_all($pattern,$content,$attr);
        if(!empty($attr[0])){
            $user=D('User');
            $refer=D('Refer');
            foreach ($attr[0] as $key => $value){
                 $username=substr(substr($value,1),0,-1);
                 if($result=$user->getUser($username,'username')){
                     $uid=$result['id'];
                     $refer->referto($tid,$uid);
                 }

            }
        }
    }

};