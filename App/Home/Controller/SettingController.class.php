<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/23
 * Time: 22:03
 */

namespace Home\Controller;

use function I;
use function print_r;
use function sleep;

class SettingController extends HomeController
{
    public function index(){
        if ($this->login()){
            $user=D('User');
            $result=$user->getUser();
            print_r($result);
            $this->assign('user',$result);
            $this->display();
        }
    }

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
}