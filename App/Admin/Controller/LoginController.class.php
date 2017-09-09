<?php
namespace Admin\Controller;
use Admin\Model\ManagerModel;
use Think\Controller;
use function I;
use function session;
use function sleep;

class LoginController extends Controller {
    public function index(){
        if (session('?admin')){
            $this->redirect('Index/index');
        }else{
            $this->display();
        }
    }




    public function checkManager(){
        sleep(1);
        if (IS_AJAX){
            $manager=new ManagerModel();
            $result=$manager->checkLogin(I('post.manager'),I('post.password'));
            echo $result;

        }   else{
            $this->error('非法操作!');
        }
    }

    //管理员退出登录
    public function logout(){

            session('admin',null);
            echo 1111222333;
            $this->redirect('Login/index');

    }


};
