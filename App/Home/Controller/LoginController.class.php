<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/6
 * Time: 12:21
 */

namespace Home\Controller;
use Think\Verify;
use function redirect;
use function session;
use function U;

class LoginController extends HomeController{
    public function index(){
        if(!session('?user_auth')) {
            $this->display();
        }else{
            redirect(U('index/index'));
        }
    }



    //生成验证码
    public function verify(){
        $verify=new Verify();
//        $verify->useImageBg=false;
//        $verify->fontSize=15;
//        $verify->useZh=true;
        $verify->entry(1);
    }
}