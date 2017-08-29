<?php
namespace Home\Controller;

use Home\Model\TopicModel;
use function session;

class IndexController extends HomeController{
    public function index(){
        if($this->login()){
            $topic=new TopicModel();
            $topiclist=$topic->getUser(0,10);
            $this->assign('topiclist',$topiclist);
            $this->assign('face',session(user_auth)['face']);
            $this->display();
        }
    }
}