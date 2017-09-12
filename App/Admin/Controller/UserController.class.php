<?php
namespace Admin\Controller;
use Think\Controller;
use function D;
use function I;
use function session;
use function sleep;


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
        if (IS_AJAX){
            $user=D('User');
            $result=$user->getList(I('post.page'),I('post.rows'),I('post.sort'),I('post.order'),I('post.username'),I('post.datefrom'),I('post.dateto'));
            $this->ajaxReturn($result);
        }else{
            $this->error('非法操作!');
        }

    }


    //删除会员信息
    public function delete(){
        if(IS_AJAX){
            sleep(3);
            $user=D('User');
            $result=$user->deleteUser(I('post.ids'));
            echo $result;
        }else{
            $this->error('非法操作!');
        }

    }




};