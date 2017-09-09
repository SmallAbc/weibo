<?php
namespace Admin\Controller;
use Think\Controller;
use function I;
use function session;

class IndexController extends Controller {
    public function index(){
        if(session('admin')){
            $this->display();
        }else{
            $this->redirect('Login/index');
        }

    }


    //获取栏目信息
    public function getNav(){
        $nav=D('Nav');
        $redult=$nav->getNav(I('post.id'));
        //easyUI的tree必须要接收json数据才行所以要转换返回
        $this->ajaxReturn($redult);
    }
}