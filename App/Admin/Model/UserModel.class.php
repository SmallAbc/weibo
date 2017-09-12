<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/9/9
 * Time: 15:55
 */

namespace Admin\Model;


use Think\Model;
use function date;
use function long2ip;
use function strtotime;

class UserModel extends Model
{
    //获取会员数据库信息
    public function getList($page,$rows,$sort,$order,$username,$datefrom,$dateto){
        if (!empty($username)){
            $map['username']=array('like','%'.$username.'%');
        }

        if ($datefrom&&$dateto){
            if ($datefrom==$dateto){
                $map['create']=array(array('gt',strtotime($datefrom)),array('lt',(strtotime($dateto)+24*60*60)));
            }else{
                $map['create']=array(array('gt',strtotime($datefrom)),array('lt',strtotime($dateto)));
            }
        }elseif ($datefrom){
            $map['create']=array('gt',strtotime($datefrom));
        }elseif ($dateto){
            $map['create']=array('lt',strtotime($dateto));
        }

        $first=($page-1)*$rows;
        $result=$this->field('*')->where($map)->limit($first,$rows)->order(array($sort=>$order))->select();
        foreach ($result as $key=>$value){
            $result[$key]['create']=date('Y-m-d H:i:s',$result[$key]['create']);
            $result[$key]['last_login']=date('Y-m-d H:i:s',$result[$key]['last_login']);
            $result[$key]['last_ip']=long2ip($result[$key]['last_ip']);
        }
//        echo $this->getLastSql();
        return array(
           'rows'=>$result,
            'total'=>$this->where($map)->count()
        );
    }



    //删除会员
    public function deleteUser($ids){
       return $result=$this->delete($ids);
    }


}