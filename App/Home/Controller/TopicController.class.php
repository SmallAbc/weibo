<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/16
 * Time: 21:15
 */

namespace Home\Controller;


use Home\Model\TopicModel;
use function session;

class TopicController extends HomeController
{
    //发布微博
    public function publish(){
        if(IS_AJAX){

            $topic=new TopicModel();
            $tip=$topic->publish(I('post.content'),session('user_auth')['id']);
            echo $tip;
        }else{
            $this->error('非法访问!');
        }
    }

}