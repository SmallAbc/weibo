<?php
namespace Admin\Controller;
use Think\Controller;
use function session;

class IndexController extends Controller {
    public function index(){
        if(session('admin')){
            $this->display();
        }else{
            $this->redirect('Login/index');
        }

    }
}