<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/8
 * Time: 16:18
 */

namespace Home\Controller;
use Home\Model\UserModel;
use function I;
use Think\Controller;

class UserController extends Controller
{

    //注册行为,返回给ajax
    public function register(){
        if (IS_POST) {
            $user = new UserModel();
            $uid = $user->register(I('post.username'), I('post.password'), I('post.email'));
        }else{
            $this->error('非法访问');
        }
    }

}