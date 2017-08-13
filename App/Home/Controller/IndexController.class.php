<?php
namespace Home\Controller;

class IndexController extends HomeController{
    public function index(){
        if($this->login()){
            echo '登录成功!';
        }
    }
}