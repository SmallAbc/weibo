<?php
namespace Home\Controller;

use Home\Model\TopicModel;

class IndexController extends HomeController{
    public function index(){
        if($this->login()){
            $topic=new TopicModel();
            $topiclist=$topic->selectdata(0,10);
            $this->assign('topiclist',$topiclist);
            $this->display();
        }
    }
}