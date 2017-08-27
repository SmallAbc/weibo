<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/17
 * Time: 15:18
 */

namespace Home\Controller;


use Home\Model\FileModel;
use Think\Controller;


class FileController extends Controller
{
    //图片上传方法
    public function image(){
        $file=new FileModel();
        $this->ajaxReturn($file->image());
//        sleep(1);
//        $upload=new Upload();
//        $upload->rootPath=C('UPLOAD_PATH');
//        $upload->maxSize=1048579;
//        $info=$upload->upload();
//        if ($info) {
//            $imgPath = C('UPLOAD_PATH').$info['Filedata']['savepath'].$info['Filedata']['savename'];
//            $image = new Image();
//            $image->open($imgPath);
//            $thumbPath = C('UPLOAD_PATH').$info['Filedata']['savepath'].'180_'.$info['Filedata']['savename'];
//            $image->thumb(180, 180)->save($thumbPath);
//            $image->open($imgPath);
//            $unfoldPath = C('UPLOAD_PATH').$info['Filedata']['savepath'].'550_'.$info['Filedata']['savename'];
//            $image->thumb(550, 550)->save($unfoldPath);
//            $path=array(
//                'source'=>$imgPath,
//                'unfold'=>$unfoldPath,
//                'thumb'=>$thumbPath
//            );
//            $this->ajaxReturn($path);
//        } else {
//            return $upload->getError();
//        }
    }    //图片上传方法
    public function face(){
        $file=new FileModel();
        $this->ajaxReturn($file->face());

    }




}