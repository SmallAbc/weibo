<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/23
 * Time: 22:03
 */

namespace Home\Controller;

class SettingController extends HomeController
{
    public function index(){
        if ($this->login()){
            $this->display();
        }
    }
}