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
use function strtotime;

class ReferModel extends RelationModel
{
    //自动完成
    protected $_auto=array(
        array('create_date','time',self::MODEL_INSERT,'function')
    );

    //关联找出@是来自哪条微博的, 属于关系,这条@属于这条微博,这条微博可以@很多人
    //关联找出@是来自博主的, 属于关系,这条@属于这个博主,博主可以@得很多人,很多次
    protected $_link=array(
      'topic'=>array(
          'mapping_type'=>self::BELONGS_TO,
          'class_name'=>'Topic',
          'foreign_key'=>'tid',
          'mapping_fields'=>'content'
      ),
        'user'=>array(
            'mapping_type'=>self::BELONGS_TO,
            'class_name'=>'User',
            'foreign_key'=>'uid',
            'mapping_fields'=>'username'
        )
    );

    //添加@提醒到数据库
    public function referTo($tid,$uid){
        $data=array(
            'tid'=>$tid,
            'uid'=>$uid
        );
        $this->create($data);
        return $this->add();
    }


    //获取@数据
    public function getRefer($uid){
        $map['uid']=$uid;
        return $this->format($this->relation(true)->where($map)->order(array('read','create_date'=>'desc'))->select());
    }


    //获取未读@的条数
    public function getReferCount($uid){
        $map['uid']=$uid;
        $map['read']=0;
        return $this->where($map)->count();
    }

    //更新已读@
    public function setRead($flag,$id){
        $map['id']=$id;
        switch ($flag){
            case '0':
                $data['read']=1;
            break;
            case '1':
                $data['read']=0;
            break;
        }
        $this->where($map)->save($data);
    }


    public function format($list){
        foreach ($list as $key=>$value){

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


        }
        return $list;
    }

};