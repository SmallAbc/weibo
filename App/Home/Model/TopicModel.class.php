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
use function date;
use function get_client_ip;
use function is_null;
use function json_decode;
use function mb_strlen;
use function sleep;
use function strtotime;

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
            }elseif ($time<60*60*24*365){
                $list[$key]['time']=date('Y年m月d日 H:i',$value['create_date']);
            }else{
                $list[$key]['time']=date('Y年m月d日 H:i:s',$value['create_date']);
            }
            $list[$key]['content'].=$list[$key]['content_over'];
            $list[$key]['content']=preg_replace('/\[(a|b|b|d)([0-9]+)\]/i','<img src="./public/home/face/$1/$2.gif" border="0">',$list[$key]['content']);
        }
        return $list;


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
        echo $uid;
        $data=array(
          'content'=>$content,
            'uid'=>$uid,
            'ip'=>get_client_ip(1)
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
}