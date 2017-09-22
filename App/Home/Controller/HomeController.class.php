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
use function explode;
use function get_client_ip;
use function json_decode;
use function S;
use function session;
use function time;

class HomeController extends Controller
{

    //构造方法,加载一些进入页面就看到的初始信息,不需要额外运行别的方法
//    public function _initialize(){
//        $refer=new ReferModel();
//        $count=$refer->getReferCount(session('user_auth')['id']);
//        echo $count;
//        $this->assign('count',$count);
//    }


    //不通过构造方法加载,改成通过ajax轮询加载
    public function getReferCount(){
        if (IS_AJAX){
//            $refer=new ReferModel();
//            //通过获取数据库信息返回给ajax
//            $count=$refer->getReferCount(session('user_auth')['id']);
            //通过获取缓存内容,不需要通过数据库,减轻数据库的压力
            //由于memcached没能正常安装上,这里我们采用的是ThinkPhP的File缓存
            $count=S('refer'.session('user_auth')['id']);
            echo $count;
        }else{
            $this->error('非法操作!');
        }

    }
    //检测用户登录状态
    protected function login(){
        if (!is_null(cookie('auto')) && !session('?user_auth')) {
            $cookie = encryption(cookie('auto'), 1);
            $value=explode('|',$cookie);
            list($username,$ip)=$value;
            if($ip==get_client_ip(1)) {
                $map['username'] = $username;
                $usermodel = new UserModel();
                $userinfo = $usermodel->field('id,username,face,last_login')->where($map)->find();
                //自动登录后的验证信息
                $auth = array(
                    'id' => $userinfo['id'],
                    'username'=>$username,
                    'last_login' => time(),
                    //写入数据库的是json数据,所以要解析后才能给PHP
                    'face'=>json_decode($userinfo['face'],true)
                );
                session('user_auth', $auth);
            }
        }
        if(session('?user_auth')){
            return 1;
        }else{
//            $this->redirect('Login/index');
            redirect(U('Login/index'));
        }
    }
}