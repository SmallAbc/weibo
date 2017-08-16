<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta charset="UTF-8">
<script type="text/javascript" src="/weibo/Public/Home/js/jquery.js"></script>
<script type="text/javascript" src="/weibo/Public/Home/js/index.js"></script>
<script type="text/javascript" src="/weibo/Public/Home/js/jquery.ui.js"></script>
<script type="text/javascript" src="/weibo/Public/Home/js/rl_exp.js"></script>
<link rel="stylesheet" href="/weibo/Public/Home/css/jquery.ui.css">
<link rel="stylesheet" href="/weibo/Public/Home/css/index.css">
<link rel="stylesheet" href="/weibo/Public/Home/css/rl_exp.css">
<title>微博系统首页</title>
<script type="text/javascript">var ThinkPHP={
        'MODULE':'/weibo/index.php/Home',
        'IMG':'/weibo/Public/<?php echo (MODULE_NAME); ?>/img',
        'FACE':'/weibo/Public/<?php echo (MODULE_NAME); ?>/face',
        'INDEX':'<?php echo U("index/index");?>'

    };
</script>
</head>
<body>
<div id="header">
  <div class="header_main">
    <div class="logo">logo</div>
    <div class="nav">
      <ul>
        <li><a href="###">首页</a></li>
        <li><a href="###">广场</a></li>
        <li><a href="###">图片</a></li>
        <li><a href="###">找人</a></li>
      </ul>
    </div>
    <div class="person">
      <ul>
        <li><a href="###">蜡笔小新</a></li>
        <li class="app"><span>消息
            <dl class="list">
                <dd><a href="#">@提到我的</a></dd>
                <dd><a href="#">收到的评论</a></dd>
                <dd><a href="#">发出的评论</a></dd>
                <dd><a href="#">我的私信</a></dd>
                <dd><a href="#">系统消息</a></dd>
                <dd><a href="#" class="line">发私信</a></dd>
            </dl>
          </span></li>
        <li class="app"><span>账号
              <dl class="list">
                <dd><a href="#">个人设置</a></dd>
                <dd><a href="#">排行榜</a></dd>
                <dd><a href="#">申请认证</a></dd>
                <dd><a href="<?php echo U('User/logout');?>" class="line">退出</a></dd>
            </dl>
          </span></li>
      </ul>
    </div>
    <div class="search">
      <form action="#" method="post"></form>
      <label for="search"><input type="text" id="search" name="search" placeholder="请输入文章或或作者关键字" ></label>
      <a href="javascript:void (0)"></a>
    </div>
  </div>
</div>

<div id="main">
  
        <div class="main_left" >
                <form class="weibo_form" action="" >
                        <span class="left">和大家一起分享一些新鲜事吧!</span>
                        <span class="right weibo_num">可以输入<strong>140</strong>个字</strong></span>
                        <textarea name="" class="weibo_text" id="rl_exp_input" cols="30" rows="10"></textarea>
                        <a href="javascript:void(0);" class="weibo_face" id="rl_exp_btn">表情</a>
                        <div class="rl_exp" id="rl_bq" style="display:none;">
                                <ul class="rl_exp_tab clearfix">
                                        <li><a href="javascript:void(0);" class="selected">默认</a></li>
                                        <li><a href="javascript:void(0);">拜年</a></li>
                                        <li><a href="javascript:void(0);">浪小花</a></li>
                                        <li><a href="javascript:void(0);">暴走漫画</a></li>
                                </ul>
                                <ul class="rl_exp_main clearfix rl_selected"></ul>
                                <ul class="rl_exp_main clearfix" style="display:none;"></ul>
                                <ul class="rl_exp_main clearfix" style="display:none;"></ul>
                                <ul class="rl_exp_main clearfix" style="display:none;"></ul>
                                <a href="javascript:void(0);" class="close">×</a>
                        </div>
                        <input type="button" class="weibo_button" value="发布">
                </form>
        </div>
        <div class="main_right">
                right
        </div>

        <div id="error">...</div>

</div>
<div id="footer">
  <div class="footer_left">&copy;20017-2022 哎哟喂 PHP 俱乐部.</div>
  <div class="footer_right">Powered by ThinkPHP.</div>
</div>

</body>
</html>