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
use function D;
use function I;
use function json_encode;


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
    }
    //图片上传方法
    public function face(){
        $file=new FileModel();
        $this->ajaxReturn($file->face());

    }

    //剪切的头像保存
    public function crop(){
        $model=D('File');
        $result=$model->crop(I('post.x'),I('post.y'),I('post.w'),I('post.h'),I('post.imgurl'));

        $userModel=D('User');
        $userModel->updateFace(json_encode($result));
        //使用thinkPHP自带的ajaxReturn,最后返回给ajax时解析出错,所以改成原生的json_encode
        //$this->ajaxReturn($result);
        echo json_encode($result);
    }




}