<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/13
 * Time: 21:41
 */

namespace Home\Controller;


use Think\Controller;

class HomeController extends Controller
{
    //检测用户登录状态
    protected function login(){
        if(session('?user_auth.username')){
            return true;
        }else{
//            $this->redirect('Login/index');
            redirect(U('Login/index'));
        }
    }
}