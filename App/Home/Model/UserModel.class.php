<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/8
 * Time: 18:08
 */

namespace Home\Model;

use function print_r;
use Think\Model;
class UserModel extends Model{
    //批量验证,系统默认为false
//    protected  $patchValidate=true;


    //用户表自动完成
    protected $_auto=array(
        array('password','sha1',self::MODEL_BOTH,'function'),
        array('repassword','sha1',self::MODEL_BOTH,'function'),
        array('create','time',self::MODEL_INSERT,'function')
    );

    //自动验证
    protected $_validate=array(
        //-1,'用户名须在2位到20位之间!'
        array('username','2,20',-1,self::EXISTS_VALIDATE,'length'),
        //-2 '密码须在6位到30位之间!'
        array('password','6,30',-2,self::EXISTS_VALIDATE,'length'),
        //-3 '两次输入的密码不一致!'
        array('repassword','password',-3,self::EXISTS_VALIDATE,'confirm'),
        //-4 '邮箱格式不正确!'
        array('email','email',-4),
        //-5 '该账号已被使用!'
        array('username','',-5,self::VALUE_VALIDATE,'unique',self::MODEL_INSERT),
        //-6 '该邮箱已被使用!'
        array('email','',-6,self::VALUE_VALIDATE,'unique',self::MODEL_INSERT)
    );



    //注册一条用户
    public function register($username,$password,$repassword,$email){
        $date=array(
            'username'=>$username,
            'password'=>$password,
            'repassword'=>$repassword,
            'email'=>$email
        );
        if ($this->create($date)){
            $uid=$this->add();
            return $uid?$uid:0;
        }else{
            print_r($this->getError());
        }
    }


    //
    public function checkField($field,$type){
        $date=array();
        switch ($type){
            case 'username':
                $date['username']=$field;
                break;

            case 'email':
                $date['email']=$field;
                break;
            default:
                return 0;
                break;
        }
        return $this->create($date)?1:$this->getError();
    }











};