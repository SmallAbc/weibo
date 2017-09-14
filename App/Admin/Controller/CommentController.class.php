<?php
namespace Admin\Controller;
use Think\Controller;
use function D;
use function I;
use function session;
use function sleep;


class CommentController extends Controller {
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
            $topic=D('Comment');
            $result=$topic->getList(I('post.page'),I('post.rows'),I('post.sort'),I('post.order'),I('post.keyword'),I('post.datefrom'),I('post.dateto'));
            $this->ajaxReturn($result);
        }else{
            $this->error('非法操作!');
        }

    }

    //获取需要被修改的会员信息
    public function getOne(){
        sleep(2);

        if(IS_AJAX){
            $user=D('Comment');
            $result=$user->getOne(I('post.id'));
            $this->ajaxReturn($result);
        }else{
            $this->error('非法操作!');
        }
    }

    //删除会员信息
    public function delete(){
        if(IS_AJAX){
            sleep(3);
            $user=D('Comment');
            $result=$user->deleteComment(I('post.ids'));
            echo $result;
        }else{
            $this->error('非法操作!');
        }

    }


    //添加新会员
    public function register(){
        if(IS_AJAX){
            sleep(2);
            $user=D('Comment');
            $result=$user->register(I('post.username'),I('post.password'),I('post.email'),I('post.domain'),I('post.face'),I('post.info'));
            echo $result;
        }else{
            $this->error('非法操作!');
        }
    }


    //修改用户信息
    public function edit(){
        sleep(2);
        if(IS_AJAX){
            $user=D('Comment');
            $result=$user->edit(I('post.id'),I('post.password'),I('post.email'),I('post.domain'),I('post.face'),I('post.info'));
            echo $result;
        }else{
            $this->error('非法操作!');
        }
    }



};