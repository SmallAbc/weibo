<?php


/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/10
 * Time: 21:24
 */


//验证验证码

function check_verify($code,$id=1){
    $verify=new \Think\Verify();
    $verify->reset=false;
   return $verify->check($code,$id);
}