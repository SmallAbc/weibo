<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/8
 * Time: 18:08
 */

namespace Home\Model;

use Think\Model\RelationModel;
use function cookie;
use function encryption;
use function get_client_ip;
use function is_null;
use function json_decode;
use function M;
use function print_r;
use function session;
use function sha1;
use function time;

class UserModel extends RelationModel {
    //批量验证,系统默认为false
//    protected  $patchValidate=true;


    //用户表自动完成
    protected $_auto=array(
        array('password','sha1',self::MODEL_BOTH,'function'),
        array('repassword','sha1',self::MODEL_BOTH,'function'),
        array('create','time',self::MODEL_INSERT,'function')
    );

    protected $_link=array(
      'extend'=>array(
          'mapping_type'=>self::HAS_ONE,
          'class_name'=>'user_extend',
          'mapping_fields'=>'intro',
          'foreign_key'=>'uid'
      )
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
    public function login($username,$password,$auto){
        $data=array(
            'login_username'=>$username,
            'password'=>$password,
        );
        $map=array();
        if($this->create($data)){
            //正确则说明采用的是邮箱登录方式
            $map['email']=$username;
            $user=$this->field('id,password,username,face')->where($map)->find();
        }else{
            $error=$this->getError();
            if($error=='notemail'){
                $map['username']=$username;
                $user=$this->field('id,username,password,face,last_login')->where($map)->find();
            }else{
                return $this->getError();
            }
        }
        if($user['password']==sha1($password)) {
            //登录验证后写入登录信息
            $update = array(
                'id' => $user['id'],
                'last_login' => time(),
                'last_ip' => get_client_ip(1),
            );
            $this->save($update);

            //将记录写到session和cookie中去
            $auth = array(
                'id' => $user['id'],
                'username' => $user['username'],
                'last_login' => time(),
                'face'=>json_decode($user['face'],true)
            );
            session('user_auth', $auth);
            //生成COOKIE
            if ($auto == 'on') {
                $cookie = encryption($user['username'] . '|' . get_client_ip(1), 0);
                cookie('auto', $cookie, 3600 * 24 * 30);
            }
            return $user['id'];
        }
    }




    //验证数据,用户名是否被占用,邮箱是否被占用,验证码是否正确
    public function checkField($value,$type){
        $data=array();
        switch ($type){
            case 'username':
                $data['username']=$value;
                echo $value;
                break;

            case 'email':
                $data['email']=$value;
                break;
                case 'verify':
                $data['verify']=$value;
                break;
            default:
                return 0;
                break;
        }
        return $this->create($data)?1:$this->getError();
    }


    //通过一对一关联获取用户信息
    public function getUser($index, $type='id'){
        switch ($type){
            case 'id':
                if($index==0){
                    $map['id']=session('user_auth')['id'];
                    $user=$this->relation(true)->field('id,username,email,face,domain')->where($map)->find();
                    if(is_null($user['extend'])){
                        $userex=M('User_extend');
                        $data['uid']=session('user_auth')['id'];
                        $userex->add($data);
                    }
                }else{
                    $map['id']=$index;
                    $user=$this->relation(true)->field('id,username,email,face,domain')->where($map)->find();
                }
            break;

            case 'domain':
                $map['domain']=$index;
                $user=$this->relation(true)->field('id,username,email,face,domain')->where($map)->find();
            break;

            case 'username':
                $map['username']=$index;
                $user=$this->field('id,domain')->where($map)->find();
            break;
        }
        return $user;
    }


    //一对一关联更新表格
    public function updateUser($email,$intro){
        $map['id']=session('user_auth')['id'];
        $data=array();
            $data['email']=$email;
            $data['extend']=array(
                'intro'=>$intro
        );

        $result=$this->relation(true)->where($map)->save($data);
        return $result;
    }


    //更新个人头像
    public function updateFace($face){
        $data=array(
            'face'=>$face,
        );
        $map['id']=session('user_auth')['id'];
        return $this->where($map)->save($data);
    }


    //更新个人域名
    public function setDomain($domain){
        $data['domain']=$domain;
        $map['id']=session('user_auth')['id'];
        return $this->where($map)->save($data);
    }

};