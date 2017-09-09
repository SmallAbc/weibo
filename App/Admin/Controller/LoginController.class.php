<?php
namespace Admin\Controller;
use Admin\Model\ManagerModel;
use Think\Controller;
use function I;
use function sleep;

class LoginController extends Controller {
    public function index(){
            $this->display();
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


};
