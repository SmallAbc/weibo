<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/8
 * Time: 18:08
 */

namespace Home\Model;

use Think\Model;
use function print_r;
use function sha1;

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
        array('username','^[^@]{2,20}$/i',-1,self::EXISTS_VALIDATE,'length'),
        //-2 '密码须在6位到30位之间!'
        array('password','6,30',-2,self::EXISTS_VALIDATE,'length'),
        //-3 '两次输入的密码不一致!'
        array('repassword','password',-3,self::EXISTS_VALIDATE,'confirm'),
        //-4 '邮箱格式不正确!'
        array('email','email',-4),
        //-5 '该账号已被使用!'
        array('username','',-5,self::VALUE_VALIDATE,'unique',self::MODEL_INSERT),
        //-6 '该邮箱已被使用!'
        array('email','',-6,self::VALUE_VALIDATE,'unique',self::MODEL_INSERT),
        //-7, '验证码错误!'
        array('verify','check_verify',-7,self::EXISTS_VALIDATE,'function'),
        //-8, 验证登录名
        array('login_username','2,50',-8,self::EXISTS_VALIDATE,'length'),
        array('login_username','email','notemail',self::EXISTS_VALIDATE)
    );



    //注册一条用户
    public function register($username,$password,$repassword,$email,$verify){
        $data=array(
            'username'=>$username,
            'password'=>$password,
            'repassword'=>$repassword,
            'email'=>$email,
            'verify'=>$verify
        );
        if ($this->create($data)){
            $uid=$this->add();
            return $uid?$uid:0;
        }else{
            print_r($this->getError());
        }
    }


    //用户登录
    public function login($username,$password){
        $data=array(
            'login_username'=>$username,
            'password'=>$password,
        );
        $map=array();
        if($this->create($data)){
            //正确则说明采用的是邮箱登录方式
            $map['email']=$username;
            $user=$this->field('id,password')->where($map)->find();
            if($user['password']==sha1($password)){
                return $user['id'];
            }else{
                return -9;
            }
        }else{
            $error=$this->getError();
            if($error=='notemail'){
                $map['username']=$username;
                $user=$this->field('id,password')->where($map)->find();
                if($user['password']==sha1($password)){
                    return $user['id'];
                }else{
                    return -9;
                }

                }else{
                return $this->getError();
                }
            }
    }

    //验证数据,用户名是否被占用,邮箱是否被占用,验证码是否正确
    public function checkField($field,$type){
        $data=array();
        switch ($type){
            case 'username':
                $data['username']=$field;
                break;

            case 'email':
                $data['email']=$field;
                break;
                case 'verify':
                $data['verify']=$field;
                break;
            default:
                return 0;
                break;
        }
        return $this->create($data)?1:$this->getError();
    }











};