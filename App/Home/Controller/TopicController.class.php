<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/16
 * Time: 21:15
 */

namespace Home\Controller;


use Home\Model\ImageModel;
use Home\Model\TopicModel;
use function session;

class TopicController extends HomeController
{
    //发布微博
    public function publish(){
        if(IS_AJAX){

            $topic=new TopicModel();
            $tip=$topic->publish(I('post.content'),session('user_auth')['id']);
            $img=I('post.img','',false);
            if (is_array($img)){
                $image=new ImageModel();
                $image->storage($img,$tip);
            }
            echo $tip;
        }else{
            $this->error('非法访问!');
        }
    }

}