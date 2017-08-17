<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/16
 * Time: 21:42
 */

namespace Home\Model;


use Think\Model;
use function mb_strlen;

class TopicModel extends Model
{
    //自动完成
    protected $_auto=array(
        array('create_date','time',self::MODEL_INSERT,'function')
    );

    //自动验证
    protected $_validate=array(
        //-1,验证微博长度
        array('allcontent','10,280',-1,self::EXISTS_VALIDATE,'length')

    );


    //发布微博
    public function publish($allcontent,$uid){
        $len=mb_strlen($allcontent,'utf-8');
        if ($len>255){
            $content=mb_substr($allcontent,0,255,'utf-8');
            $content_over=mb_substr($allcontent,255,280,'utf-8');
        }else{
            $content=$allcontent;
            $content_over='';
        }
        $data=array(
          'content'=>$content,
            'uid'=>$uid
        );
        if(!empty($content_over)){
            $data['content_over']=$content_over;
        }
        if($this->create($data)){
            $uid=$this->add();
            return $uid?$uid:0;
        }else{
            return $this->getError();
        }
    }
}