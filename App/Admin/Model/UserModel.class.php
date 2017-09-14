<?php
/**
 * Created by PhpStorm.
 * User: Wang Yuan
 * Date: 2017/9/9
 * Time: 15:55
 */

namespace Admin\Model;


use Think\Model;
use function D;
use function date;
use function long2ip;
use function strtotime;

class UserModel extends Model\RelationModel
{


    //关联数据库
    protected $_link=array(
      'extend'=>array(
          'mapping_type'=>self::HAS_ONE,
          'class_name'=>'user_extend',
          'mapping_fields'=>'intro',
          'foreign_key'=>'uid'
      )
    );


    //自动验证
    protected $_validate=array(
        //-1,'用户名须在2位到20位之间!'
        array('username','/^[^@]{2,20}$/i',-1,self::EXISTS_VALIDATE,self::MODEL_INSERT),
        //-2 '密码须在6位到30位之间!' 新增
        array('password','6,30',-2,self::EXISTS_VALIDATE,'length',self::MODEL_INSERT),
        //-2 '密码须在6位到30位之间!' 修改
        array('password','6,30',-8,self::VALUE_VALIDATE,'length',self::MODEL_UPDATE),
        //-3 '邮箱格式不正确!'
        array('email','email',-3),
        //-4 当domain存在时验证长度及合法性
        array('domain','/^\w{4,10}$/i',-4,self::VALUE_VALIDATE),
        //-5 '该账号已被使用!'
        array('username','',-5,self::VALUE_VALIDATE,'unique',self::MODEL_INSERT),
        //-6 '该邮箱已被使用!'
        array('email','',-6,self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
        //-7 '域名已被使用!'
        array('domain','',-7,self::VALUE_VALIDATE,'unique',self::MODEL_BOTH),
    );


    //自动完成
    protected $_auto=array(
        array('password','sha1',self::MODEL_BOTH,'function'),
        array('create','time',self::MODEL_INSERT,'function'),
    );

    //获取会员数据库信息
    public function getList($page,$rows,$sort,$order,$username,$datefrom,$dateto){
        if (!empty($username)){
            $map['username']=array('like','%'.$username.'%');
        }

        if ($datefrom&&$dateto){
            if ($datefrom==$dateto){
                $map['create']=array(array('gt',strtotime($datefrom)),array('lt',(strtotime($dateto)+24*60*60)));
            }else{
                $map['create']=array(array('gt',strtotime($datefrom)),array('lt',strtotime($dateto)));
            }
        }elseif ($datefrom){
            $map['create']=array('gt',strtotime($datefrom));
        }elseif ($dateto){
            $map['create']=array('lt',strtotime($dateto));
        }

        $first=($page-1)*$rows;
        $result=$this->field('*')->where($map)->limit($first,$rows)->order(array($sort=>$order))->select();
        foreach ($result as $key=>$value){
            $result[$key]['create']=date('Y-m-d H:i:s',$result[$key]['create']);
            $result[$key]['last_login']=date('Y-m-d H:i:s',$result[$key]['last_login']);
            $result[$key]['last_ip']=long2ip($result[$key]['last_ip']);
        }
//        echo $this->getLastSql();
        return array(
           'rows'=>$result,
            'total'=>$this->where($map)->count()
        );
    }



    //删除会员
    public function deleteUser($ids){
       return $result=$this->delete($ids);
    }


    //添加会员

    public function register($username,$password,$email,$domain,$face,$info){
        $data=array(
            'username'=>$username,
            'password'=>$password,
            'email'=>$email,
            'domain'=>$domain,
            'face'=>$face,

        );
        if($this->create($data)){
            $uid=$this->add();
            if($uid&&$info){
                $data=array(
                  'intro'=>$info,
                  'uid' =>$uid,
                );
            $userexted=D('user_extend');
            $userexted->add($data);
            }
            return $uid;

        }else{
            return $this->getError();
        }
    }


    //获取一条会员信息
    public function getOne($id){
        $map['id']=$id;
        $result=$this->relation(true)->field('id,username,password,email,domain')->where($map)->find();
        return $result;
    }


    //修改会员信息
    public function edit($id,$password,$email,$domain,$face,$info){

        $data=array(
            'id'=>$id,               //create的时候,如果有id就是修改模式,没有的话就是新增模式
            'email'=>$email,
            'domain'=>$domain,
            'face'=>$face,
            'extend'=>array('intro'=>$info)
        );
        if($password!=''){
            $data['password']=$password;
        }
        //使用create时最好给他指定type,1是新增模式,2是更新模式,否则让函数自动判断有可能会出现错误
        if($this->create($data,2)){
            $result=$this->relation(true)->save();
            return $result;
        }else{
            return $this->getError();
        }
    }

}