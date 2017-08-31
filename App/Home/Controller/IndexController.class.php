<?php
namespace Home\Controller;

use Home\Model\TopicModel;
use function session;

class IndexController extends HomeController{
    public function index(){
        if($this->login()){
            $topic=new TopicModel();
            $topiclist=$topic->getUser(0,10);
            foreach ($topiclist as $key=>$value){
                if($value['rid']!=0){
                    $forward_content=$topic->getOneTopic($value['rid']);
                    $topiclist[$key]['forward_content']=$forward_content[0];
                };
            }
            $this->assign('topiclist',$topiclist);
            $this->assign('face',session('user_auth')['face']);
            $this->display();
        }
    }
}