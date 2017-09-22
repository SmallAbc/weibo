<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/23
 * Time: 22:03
 */

namespace Home\Controller;

use function D;
use function I;
use function json_decode;
use function session;
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

    //头像设置完成后执行一次,以便session写入,让前台显示头像
    public function avatar(){
        if ($this->login()){
            $user=D('User');
            $result=$user->getUser();
            $result['face']=json_decode($result['face'],true);
            session('user_auth.face',$result['face']);  //设置成功后将face写入session,否则首页的face是无法显示的,需要重新登录
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


    //查看@提及我的信息
    public function refer(){
        $refer=D('Refer');
        $result=$refer->getRefer(session('user_auth')['id']);
        $this->assign('refer',$result);
        $this->display();
    }


    //设置提及我的信息已读状态
    public function  setRead(){
        if (IS_AJAX){
            $refer=D('Refer');
            $refer->setRead(I('post.flag'),I('post.id'));
        }
    }



    //获得认证界面信息
    public function approve(){
        $approve=D('approve');
        $result=$approve->getApprove(session('user_auth')['id']);
        $this->assign('approve',$result);
        $this->display();
    }


    //发送认证
    public function sendApplication(){
        if(IS_AJAX){
            $approve=D('Approve');
            $result=$approve->setApplication(I('post.id'),I('post.name'),I('post.info'));
            echo $result;
        }else{
            $this->error('非法操作!');
        }
    }

};