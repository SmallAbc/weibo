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
use function ceil;
use function I;
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

    //ajax获取微博列表(加载更多时局部刷新)
    public function ajaxList(){
        if(IS_AJAX) {
            $topic = new TopicModel();
            $ajaxlist = $topic->getUser(I('post.count'), 10);
            $this->assign('ajaxlist', $ajaxlist);
            //返回整个html数据给ajax,然后ajax将数据加入到加载按钮的前边
            $this->display();
        }else{
            $this->error('非法访问!');
        }
    }

    //ajax获取微博内容的总页数
    public function ajaxCount(){
        if(IS_AJAX) {
            $topic = new TopicModel();
            $count = $topic->where('1=1')->count();
            echo ceil($count/10);
        }else{
            $this->error('非法访问!');
        }
    }

    //转发微博
    public function forward(){
        if(IS_AJAX){
            $topicmodel=new TopicModel();
            $uid=$topicmodel->forward(I('post.rid'),I('post.content'));
            if($uid){
                echo $uid;
            }
        }else{
            $this->error('非法访问!');
        }
    }


};


