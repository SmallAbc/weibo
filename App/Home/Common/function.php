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

function encryption($username,$type){
    $key=sha1(C(COOKIE_KEY));
    switch ($type){
        case '0':
            return base64_encode($username^$key);
        break;
        case '1':
            return base64_decode($username)^$key;
    }
}