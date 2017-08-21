<?php
namespace Home\Controller;

use function D;

class IndexController extends HomeController{
    public function index(){
        if($this->login()){
            $topic=D('Topic');
            $topiclist=$topic   ->relation(true)
                                ->table('__TOPIC__ a,__USER__ b')
                                ->field('a.id,a.content,a.content_over,a.create_date,b.username')
                                ->limit(0,10)
                                ->order('create_date DESC')
                                ->where('a.uid=b.id')
                                ->select();
            $this->assign('topiclist',$topic->format($topiclist));
            $this->display();
        }
    }
}