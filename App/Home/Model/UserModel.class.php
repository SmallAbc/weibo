<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/8
 * Time: 18:08
 */

namespace Home\Model;

use Think\Model;
class UserModel extends Model{
    //用户表自动完成
    protected $_auto=array(
        array('password','sha1',self::MODEL_BOTH,'function'),
        array('create','time',self::MODEL_INSERT,'function')
    );



    //注册一条用户
    public function register($username,$password,$email){
        $date=array(
            'username'=>$username,
            'password'=>$password,
            'email'=>$email
        );
        if ($this->create($date)){
            $uid=$this->add();
            return $uid?$uid:0;
        }
    }











};