<?php
/**
 * Created by PhpStorm.
 * Approve: Wang Yuan
 * Date: 2017/9/9
 * Time: 15:55
 */

namespace Admin\Model;


use Think\Model;
use function date;
use function strtotime;
use function time;

class ApproveModel extends Model\RelationModel
{


    //关联数据库
    protected $_link=array(
      'extend'=>array(
          'mapping_type'=>self::HAS_ONE,
          'class_name'=>'user_extend',
          'mapping_fields'=>'intro',
          'foreign_key'=>'uid'
      )
    );







    //获取会员数据库信息
    public function getList($page,$rows,$sort,$order,$username,$datefrom,$dateto){
        if (!empty($username)){
            $map['name']=array('like','%'.$username.'%');
        }

        if ($datefrom&&$dateto){
            if ($datefrom==$dateto){
                $map['create_date']=array(array('gt',strtotime($datefrom)),array('lt',(strtotime($dateto)+24*60*60)));
            }else{
                $map['create_date']=array(array('gt',strtotime($datefrom)),array('lt',strtotime($dateto)));
            }
        }elseif ($datefrom){
            $map['create_date']=array('gt',strtotime($datefrom));
        }elseif ($dateto){
            $map['create_date']=array('lt',strtotime($dateto));
        }

        $first=($page-1)*$rows;
        $result=$this->field('*')->where($map)->limit($first,$rows)->order(array($sort=>$order))->select();
        foreach ($result as $key=>$value){
            $result[$key]['create_date']=date('Y-m-d H:i:s',$result[$key]['create_date']);
            $result[$key]['approve_date']=date('Y-m-d H:i:s',$result[$key]['approve_date']);
            if($result[$key]['state']==0){
                $result[$key]['state']='待验证';
            }else{
                $result[$key]['state']='通过';
            }
        }
        return array(
           'rows'=>$result,
            'total'=>$this->where($map)->count()
        );
    }



    //删除会员
    public function deleteApprove($ids){
       return $result=$this->relation(true)->delete($ids);
    }





    //获取一条会员信息
    public function setState($ids){
        $map['id']=array('in',$ids);
        $map['state']=0;
        $data=array(
            'state'=>'1',
            'approve_date'=>time(),
        );
        $result=$this->where($map)->save($data);
        return $result;
    }




}