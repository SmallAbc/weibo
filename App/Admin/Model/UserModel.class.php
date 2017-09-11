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

class UserModel extends Model
{
    //获取会员数据库信息
    public function getList($page,$rows,$sort,$order){
        $first=($page-1)*$rows;
        $result=$this->field('*')->limit($first,$rows)->order(array($sort=>$order))->select();
        foreach ($result as $key=>$value){
            $result[$key]['create']=date('Y-m-d H:i:s',$result[$key]['create']);
            $result[$key]['last_login']=date('Y-m-d H:i:s',$result[$key]['last_login']);
            $result[$key]['last_ip']=long2ip($result[$key]['last_ip']);
        }

        return array(
           'rows'=>$result,
            'total'=>$this->count()
        );
    }


}