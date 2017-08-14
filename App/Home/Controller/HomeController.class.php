<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/13
 * Time: 21:41
 */

namespace Home\Controller;


use Home\Model\UserModel;
use Think\Controller;
use function cookie;
use function session;

class HomeController extends Controller
{
    //检测用户登录状态
    protected function login(){
        if (!is_null(cookie('auto')) && !session('?user_auth')) {
            $map['username'] = encryption(cookie('auto'), 1);
            $usermodel = new UserModel();
            $userinfo = $usermodel->field('id,username,last_login')->where($map)->find();
            $auth=array(
                'id='=>$userinfo['id'],
                'username'=>$userinfo['username'],
                'last_login'=>$userinfo['last_login']
            );
            session('user_auth',$auth);
        }else{
        }
        if(session('?user_auth')){
            return 1;
        }else{
//            $this->redirect('Login/index');
            redirect(U('Login/index'));
        }
    }
}