<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/9/9
 * Time: 23:37
 */

namespace Admin\Model;


use Think\Model;

class NavModel extends Model
{
    //获取Nav信息
    public function getNav($id=0){
        $map['nid']=$id;
        return $this->field('id,text,state,url,iconCls')->where($map)->select();
    }
}