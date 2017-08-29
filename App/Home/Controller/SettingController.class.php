<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/23
 * Time: 22:03
 */

namespace Home\Controller;

use function I;
use function json_decode;
use function sleep;

class SettingController extends HomeController
{
    //个人设置
    public function index(){
        if ($this->login()){
            $user=D('User');
            $result=$user->getUser();
            $this->assign('user',$result);
            $this->display();
        }
    }

    //头像设置
    public function avatar(){
        if ($this->login()){
            $user=D('User');
            $result=$user->getUser();
            $result['face']=json_decode($result['face'],true);
            $this->assign('user',$result);
            $this->display();
        }
    }


    //域名设置
    public function domain(){
        $user=D('User');
        $result=$user->getUser();
        $this->assign('domain',$result['domain']);
        $this->display();
    }
    //更新个人信息
    public function updateUser(){

        if(IS_AJAX) {
            sleep(2);
            $user = D('User');
            $uid=$user->updateUser(I('post.email'), I('post.intro'));
            echo $uid;
        }else{
            $this->error('非法操作!');
        }
    }

    //设置个人域名
    public function setdomain(){
        if(IS_AJAX){
            sleep(2);
            $user=D('User');
            $result=$user->setDomain(I('post.domain'));
            echo $result;
        }else{
            $this->error('非法操作!');
        }
    }




};