<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/6
 * Time: 12:21
 */

namespace Home\Controller;
use Think\Controller;
use function var_dump;

class LoginController extends Controller{
    public function index(){
        $this->display();
    }
    public function test(){
        $m=M('User');
    }
}