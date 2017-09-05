<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/16
 * Time: 21:15
 */

namespace Home\Controller;


use Home\Model\CommentModel;
use Home\Model\TopicModel;
use function ceil;
use function I;
use function session;
use function sleep;

class CommentController extends HomeController
{
    //发布微博
    public function publish()
    {
        if (IS_AJAX) {
            $topic = new CommentModel();
            $tip = $topic->publish(I('post.content'), session('user_auth')['id'], I('post.tid'));
            if ($tip) {
                $topic = new TopicModel();
                $topic->setCommentCount(I('post.tid'));
            }

        } else {
            $this->error('非法访问!');
        }
    }

    //ajax获取微博列表(加载更多时局部刷新)
    public function commentList()
    {
        sleep(2);
//        if(IS_AJAX) {
        $size = 5;
        if (I('post.currentpage')){
            $currentpage = I('post.currentpage');
        }else{
            $currentpage = 1;
        }
        $comment = new CommentModel();
        $count = $comment->getCount(I('post.tid'));
        $pagetotal = ceil($count / $size);
        $first = ($currentpage - 1) * $size;
        $ajaxlist = $comment->getComment(I('post.tid'), $first, $size);
        $this->assign('commentlist', $ajaxlist);
        $this->assign('pagetotal', $pagetotal);
        //返回整个html数据给ajax,然后ajax加入到加载按钮的前边
        $this->display();
//        }else{
//            $this->error('非法访问!');
//        }
    }


}

;


