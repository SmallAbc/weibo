<?php
namespace Admin\Controller;
use Think\Controller;
use function D;
use function I;
use function session;


class UserController extends Controller {
    public function index(){
        if(session('?admin')){
            $this->display();
        }else{
            $this->redirect('Index/index');
        }
    }


    //获取会员列表
    public function getList(){
        $user=D('User');
        $result=$user->getList(I('post.page'),I('post.rows'),I('post.sort'),I('post.order'),I('post.username'),I('post.datefrom'),I('post.dateto'));
        $this->ajaxReturn($result);
    }





};