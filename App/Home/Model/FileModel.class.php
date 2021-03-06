<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/25
 * Time: 13:42
 */

namespace Home\Model;


use Think\Image;
use Think\Upload;
use function C;
use function session;
use function sleep;

//由于这个model是不需要对应相关的数据的,所以不能extends Model,这样会自动链接数据表,检测到没有相应的表会报错
class FileModel
{
    public  function image(){
        sleep(1);
        $upload=new Upload();
        $upload->rootPath=C('UPLOAD_PATH');
        $upload->maxSize=1048579;
        $info=$upload->upload();
        $basepath=C('UPLOAD_PATH').$info['Filedata']['savepath'];
        $namepath=$info['Filedata']['savename'];
        if ($info) {
            $imgPath = $basepath.$namepath;
            $image = new Image();
            $image->open($imgPath);
            $thumbPath = $basepath.'180_'.$namepath;
            $image->thumb(180, 180)->save($thumbPath);
            $image->open($imgPath);
            $unfoldPath = $basepath.'550_'.$namepath;
            $image->thumb(550, 550)->save($unfoldPath);
            $path=array(
                'source'=>$imgPath,
                'unfold'=>$unfoldPath,
                'thumb'=>$thumbPath
            );
            return $path;
        } else {
            return $upload->getError();
        }
    }

    public function face(){
        sleep(1);
        $upload=new Upload();
        $upload->rootPath=C('UPLOAD_PATH');
        $upload->maxSize=1048579;
        $info=$upload->upload();
        $basepath=C('UPLOAD_PATH').$info['Filedata']['savepath'];
        $namepath=$info['Filedata']['savename'];
        if ($info) {
            $imgPath = $basepath.$namepath;
            $image=new Image();
            $image->open($imgPath);
            $image->thumb(500,500)->save($imgPath);
            return $imgPath;
        } else {
            return $upload->getError();
        }
    }

    //头像图片保存
    public function crop($x,$y,$w,$h,$imgurl){
        $smallface=C('FACE_PATH').'_50_'.session('user_auth')['id'].'.jpg';
        $bigface=C('FACE_PATH').'_200_'.session('user_auth')['id'].'.jpg';
        $image=new Image();
        $image->open($imgurl);
        $image->crop($w,$h,$x,$y);
        $image->thumb(200,200,image::IMAGE_THUMB_FIXED)->save($bigface);
        $image->thumb(50,50,image::IMAGE_THUMB_FIXED)->save($smallface);
        $path=array(
            'small'=>$smallface,
            'big'=>$bigface
        );

        return $path;
    }

}