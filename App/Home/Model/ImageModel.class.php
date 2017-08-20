<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/20
 * Time: 15:09
 */

namespace Home\Model;


use Think\Model;

class ImageModel extends Model
{
    //微博配图存入数据库//TODO 这里和教程的做得有点区别,教程是将图片的id做出字符串存入文章数据表
    //TODO 这里是将文章的id存给每一张它对应的图片
    public function storage($img,$tip){
        foreach ($img as $key=>$value){
        $data=array(
            data=>$value,
            tid=>$tip
        );

            $this->create($data);
            $this->add();
        }

    }
}