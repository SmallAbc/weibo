<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/17
 * Time: 15:18
 */

namespace Home\Controller;


use Think\Controller;
use Think\Upload;
use function C;

class FileController extends Controller
{
    //图片上传方法
    public function upload(){
        $upload=new Upload();
        $upload->rootPath=C('UPLOAD_PATH');
        $result=$upload->upload();
        if ($result){
            return $result;
        }else{
            return $upload->getError();
        }
    }




}