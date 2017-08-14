<?php
namespace Home\Controller;

use function dump;
use function session;

class IndexController extends HomeController{
    public function index(){
        if($this->login()){
            echo '登录成功!';
            dump(session());
        }
    }
}