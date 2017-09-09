<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/9/9
 * Time: 15:55
 */

namespace Admin\Model;


use Think\Model;
use function get_client_ip;
use function time;

class ManagerModel extends Model
{

    //自动验证
    protected $_validate=array(
        //-1,'用户名须在2位到20位之间!'
        array('manager','/^[^@]{2,20}$/i',-1,self::EXISTS_VALIDATE),
        //-2 '密码须在6位到30位之间!'
        array('password','6,30',-2,self::EXISTS_VALIDATE,'length'),


    );
    //验证管理员登录的信息
    public function checkLogin($manager,$password){
        $data=array(
          'manager'=>$manager,
          'password'=>$password
        );
        if($this->create($data)){
            $map=array(
                'manager'=>$manager,
                'password'=>sha1($password)
            );

            $result=$this->field('id')->where($map)->find();
            if($result){
                $update=array(
                'last_ip'=>get_client_ip(1),
                    'last_login'=>time()
                );
                session('admin',$manager);
                $this->where($map)->save($update);
                return $result['id'];
            }else{
                return false;
            }
        }else{
            return $this->getError();
        }
    }


    //验证管理员账号
    public function checkManager(){

            echo true;

    }
}