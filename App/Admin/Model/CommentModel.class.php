<?php
/**
 * Created by PhpStorm.
 *Comment: Wang Yuan
 * Date: 2017/9/9
 * Time: 15:55
 */

namespace Admin\Model;


use Think\Model;
use function D;
use function date;
use function long2ip;
use function strtotime;
use function time;

class CommentModel extends Model\RelationModel
{


    //关联数据库
    protected $_link=array(
      'user'=>array(
          'mapping_type'=>self::BELONGS_TO,
          'class_name'=>'user',
          'mapping_fields'=>'username',
          'as_fields'=>'username:username',
          'foreign_key'=>'uid',
      ),
        'topic'=>array(
          'mapping_type'=>self::BELONGS_TO,
          'class_name'=>'topic',
          'mapping_fields'=>'content',
          'as_fields'=>'content:topic',
          'foreign_key'=>'tid',
      )
    );


    //自动验证
//    protected $_validate=array(
//
//    );




    //获取会员数据库信息
    public function getList($page,$rows,$sort,$order,$keyword,$datefrom,$dateto){
        if (!empty($keyword)){
            $map['content']=array('like','%'.$keyword.'%');
        }

        if ($datefrom&&$dateto){
            if ($datefrom==$dateto){
                $map['create_date']=array(array('gt',strtotime($datefrom)),array('lt',(strtotime($dateto)+24*60*60)));
            }else{
                $map['create_date']=array(array('gt',strtotime($datefrom)),array('lt',strtotime($dateto)));
            }
        }elseif ($datefrom){
            $map['create_date']=array('gt',strtotime($datefrom));
        }elseif ($dateto){
            $map['create_date']=array('lt',strtotime($dateto));
        }

        $first=($page-1)*$rows;
        $result=$this->relation(true)->field('*')->where($map)->limit($first,$rows)->order(array($sort=>$order))->select();
        foreach ($result as $key=>$value){
            $result[$key]['create_date']=date('Y-m-d H:i:s',$result[$key]['create_date']);
            $result[$key]['ip']=long2ip($result[$key]['ip']);
        }
//        echo $this->getLastSql();
        return array(
           'rows'=>$result,
            'total'=>$this->where($map)->count()
        );
    }



    //删除会员
    public function deleteComment($ids){
       return $result=$this->relation(true)->delete($ids);
    }


    //添加会员

    public function register($content,$password,$email,$domain,$face,$info){
        $data=array(
            'content'=>$content,
            'email'=>$email,
            'domain'=>$domain,
            'face'=>$face,
            'create_date'=>time(),
            'extend'=>array(
                'intro'=>$info,
            )
        );
        if($this->create($data)){
            $data['password']=sha1($password);
            $uid=$this->relation(true)->add($data);
            return $uid;
        }else{
            return $this->getError();
        }
    }


    //获取一条会员信息
    public function getOne($id){
        $map['id']=$id;
        $result=$this->relation(true)->field('id,content,password,email,domain')->where($map)->find();
        return $result;
    }


    //修改会员信息
    public function edit($id,$password,$email,$domain,$face,$info){
        $ex=D('user_extend');
        $map['uid']=$id;
        $result=$ex->where($map)->select();
        if (!$result){
            $data=array(
                'uid'=>$id,
                'intro'=>'',
            );
            $ex->add($data);
        }

        $data=array(
            'id'=>$id,               //create_date的时候,如果有id就是修改模式,没有的话就是新增模式
            'email'=>$email,
            'domain'=>$domain,
            'face'=>$face,
            'extend'=>array('intro'=>$info)
        );

        //使用create时最好给他指定type,1是新增模式,2是更新模式,否则让函数自动判断有可能会出现错误
        if($this->create($data,2)){
            if($password){
                $data['password']=sha1($password);
            }
            $result=$this->relation(true)->save($data);
            return $result;
        }else{
            return $this->getError();
        }
    }

}