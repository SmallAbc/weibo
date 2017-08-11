<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/6
 * Time: 12:21
 */

namespace Home\Controller;
use Think\Controller;
use Think\Verify;
use function var_dump;

class LoginController extends Controller{
    public function index(){
        $this->display();
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