<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/8
 * Time: 16:18
 */

namespace Home\Controller;
use Home\Model\UserModel;
use function cookie;
use function I;
use function session;
use function sleep;

class UserController extends HomeController
{

    //注册行为,返回给ajax
    public function register(){
        if (IS_POST) {
            $user = new UserModel();
            sleep(2);
            $uid = $user->register(I('post.username'), I('post.password'),I('post.repassword'), I('post.email'),I('post.verify'));
            echo $uid;
        }else{
            $this->error('非法访问');
        }
    }
    //登录行为,返回给ajax
    public function login(){
        if (IS_AJAX) {
            $user = new UserModel();
            sleep(2);
            $uid = $user->login(I('post.username'), I('post.password'),I('post.auto'));
            echo $uid;
        }else{
            $this->error('非法访问');
        }
    }


    //退出登录状态
    public function logout(){
        //清理session
        session(null);
        //清除自动登录的cookie
        cookie('auto',null);
        //跳转到退出成功页面
        $this->success('退出成功!',U('Login/index'));
    }


    //验证用户名,信息返回给ajax
    public function checkUserName(){
        if (IS_AJAX) {
            $user = new UserModel();
            $uid=$user->checkField(I('post.username'), 'username');
            sleep(2);
            echo ($uid>0)?'true':'false';
        }
    }

    //验证邮箱,验证结果返回给ajax
    public function checkEmail(){
        if (IS_AJAX) {
            $user = new UserModel();
            $uid=$user->checkField(I('post.email'), 'email');
            sleep(2);
            echo $uid>0?'true':'false';
        }
    }

    //验证验证码,验证信息返回给ajax
    public function checkVerify(){
        if(IS_AJAX){
            $user = new UserModel();
            $uid=$user->checkField(I('post.verify'), 'verify');
            echo $uid>0?'true':'false';
        }
    }





};