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

class ApproveModel extends RelationModel
{
    //自动完成
    protected $_auto=array(
        array('create_date','time',self::MODEL_INSERT,'function')
    );


    //自动验证
    protected $_validate=array(
        array('name','2,20','-1',self::MODEL_INSERT,'length'),
        array('info','5,20','-2',self::MODEL_INSERT,'length'),

    );
    //关联找出@是来自哪条微博的, 属于关系,这条@属于这条微博,这条微博可以@很多人
    //关联找出@是来自博主的, 属于关系,这条@属于这个博主,博主可以@得很多人,很多次
    protected $_link=array(

        'user'=>array(
            'mapping_type'=>self::BELONGS_TO,
            'class_name'=>'User',
            'foreign_key'=>'uid',
            'mapping_fields'=>'username'
        )
    );



    //获取所有认证数据(包括认证与未认证的)
    public function getApprove($uid){
        $map['uid']=$uid;
        return $this->format($this->relation(true)->where($map)->order(array('create_date'=>'desc'))->select());
    }

    //获取已经被认证的认证名
    public function getApproved($uid){
        $map=array(
          'uid'=>$uid,
          'state'=>'1',
        );
        return $this->format($this->relation(true)->where($map)->order(array('create_date'=>'asc'))->find());
    }



    //将用户提交的认证申请存入数据库
    public function setapplication($id,$name,$info){
        $data=array(
            'uid'=>$id,
            'name'=>$name,
            'info'=>$info
        );
        if($this->create($data)){
            $id=$this->add();
            return $id;
        }else{
            return $this->getError();
        }


    }
    //获取未读@的条数
    public function getApproveCount($uid){
        $map['uid']=$uid;
        $map['read']=0;
        return $this->where($map)->count();
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