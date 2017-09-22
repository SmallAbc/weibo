<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/8/23
 * Time: 22:03
 */

namespace Home\Controller;



use Home\Model\UserModel;
use const __ROOT__;
use function I;
use function json_decode;
use function print_r;
use function U;

class SpaceController extends HomeController
{
    //显示个人主页
    public function index(){
        if ($this->login()){
            $UserModel=D('user');
            echo I('get.id');
            if(I('get.id')!=0||I('get.domain')!=''){
                if(I('get.id')){
                    $result=$UserModel->getUser(I('get.id'),'id');
                }else{
                    $result=$UserModel->getUser(I('get.domain'),'domain');
                }
                if($result){
                    print_r($result);
                    $result['face']=json_decode($result['face'],true);
                    $this->assign('user',$result);
                    $this->display();
                }else{
                    $this->error('用户ID错误!');
                }
            }else{
                $this->error('用户不存在!');
            }

        }
    }

    //设置@的链接
    public function setUrl(){
        $usermodel=new UserModel();
        $result=$usermodel->getUser(I('post.name'),'username');
            if($result){
                if (empty($result['domain'])){
                echo U('Space/index',array(id=>$result['id']));
            }else{
                echo __ROOT__.'/i/'.$result['domain'];
            }
        }

    }






};