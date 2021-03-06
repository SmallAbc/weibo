<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/16
 * Time: 21:42
 */

namespace Home\Model;


use Think\Model\RelationModel;
use function date;
use function get_client_ip;
use function mb_strlen;
use function preg_replace;
use function sleep;
use function strtotime;

class CommentModel extends RelationModel
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
            $list[$key]=$value;
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


    //发布微博
    public function publish($allcontent,$uid,$tid){
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
            'ip'=>get_client_ip(1),
            'tid'=>$tid
        );
        if(!empty($content_over)){
            $data['content_over']=$content_over;
        }
        if($this->create($data)){
            $uid=$this->add();
            sleep(2);
            return $uid?$uid:0;
        }else{
            return $this->getError();
        }
    }


    //获取微博评论列表
    public function getComment($id,$first,$size){
        $map['a.tid']=$id;
       $result=$this->format($this->table('__COMMENT__ a,__USER__ b')->field('a.id,a.content,a.create_date,a.uid,a.tid,b.username,b.domain')->limit($first,$size)->where('a.uid=b.id')->where($map)->order('a.create_date desc')->select());
        return $result;

    }

    //获取微博评论总条数
    public function getCount($id){
        $map['a.tid']=$id;
        $count=$this->table('__COMMENT__ a,__USER__ b')->field('a.id,a.content,a.create_date,a.uid,a.tid,b.username,b.domain')->where('a.uid=b.id')->where($map)->count();
        return $count;
    }

};