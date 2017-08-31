<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html
        PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <meta charset="UTF-8">
<script type="text/javascript" src="/weibo/Public/Home/js/jquery.js"></script>
<script type="text/javascript" src="/weibo/Public/Home/js/jquery.ui.js"></script>
<script type="text/javascript" src="/weibo/Public/Home/js/base.js"></script>
<link rel="stylesheet" href="/weibo/Public/Home/css/jquery.ui.css">
<link rel="stylesheet" href="/weibo/Public/Home/css/base.css">

    <script type="text/javascript" src="/weibo/Public/Home/js/index.js"></script>
    <script type="text/javascript" src="/weibo/Public/Home/js/rl_exp.js"></script>
    <script type="text/javascript" src="/weibo/Public/Home/js/pic_box.js"></script>
    <script type="text/javascript" src="/weibo/Public/Home/scrollup/js/jquery.scrollUp.js"></script>
    <script type="text/javascript" src="/weibo/Public/Home/uploadify/jquery.uploadify.js"></script>
    <link rel="stylesheet" href="/weibo/Public/Home/css/index.css">
    <link rel="stylesheet" href="/weibo/Public/Home/css/rl_exp.css">
    <link rel="stylesheet" href="/weibo/Public/Home/uploadify/uploadify.css">
    <link rel="stylesheet" href="/weibo/Public/Home/scrollup/css/themes/pill.css">



<title>微博系统首页</title>
<script type="text/javascript">var ThinkPHP={
        'MODULE':'/weibo/index.php/Home',
        'IMG':'/weibo/Public/<?php echo (MODULE_NAME); ?>/img',
        'AVATAR':'Uploads/Faces',
        'FACE':'/weibo/Public/<?php echo (MODULE_NAME); ?>/face',
        'INDEX':'<?php echo U("index/index");?>',
        'UPLOADIFY':'/weibo/Public/Home/uploadify',
        'ROOT':'/weibo',
        //用于上传头像时,假如取消上传,回归的图片路径
        'BIG':'<?php echo session("user_auth")["face"]["big"];?>'
    };
</script>
</head>
<body>
<div id="header">
  <div class="header_main">
    <div class="logo">logo</div>
    <div class="nav">
      <ul>
        <li><a href="<?php echo u('index/index');?>">首页</a></li>
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
                <dd><a href="<?php echo U('Setting/index');?>">个人设置</a></dd>
                <dd><a href="#">排行榜</a></dd>
                <dd><a href="#">申请认证</a></dd>
                <dd><a href="<?php echo u('User/logout');?>" class="line">退出</a></dd>
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
  
    <div class="main_left">
        <div class="weibo_form">
            <span class="left">和大家分享一点新鲜事吧？</span>
            <span class="right weibo_num">可以输入<strong>140</strong>个字</span>
            <textarea class="weibo_text" id="rl_exp_input"></textarea>
            <a href="javascript:void(0);" class="weibo_face" id="rl_exp_btn">表情<span class="face_arrow_top"></span></a>
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
            <a href="javascript:void(0);" class="weibo_pic" id="pic_btn">图片<span class="pic_arrow_top"></span></a>
            <div class="weibo_pic_box" id="pic_box" style="display:none;">
                <div class="weibo_pic_header">
                    <span class="weibo_pic_info">共 <span class="weibo_pic_total">0</span> 张，还能上传 <span class="weibo_pic_limit">8</span> 张（按住ctrl可选择多张）</span>
                    <a href="javascript:void(0);" class="close">×</a>
                </div>
                <div class="weibo_pic_list"></div>
                <input type="file" name="file" id="file">
            </div>
            <input class="weibo_button" type="button" value="发布">
        </div>
        <div class="weibo_content" style="clear:both;">
            <ul>
                <li ><a href="javascript:void(0);" class="selected">我关注的<i class="nav_arrow"></i></a></li>
                <li><a href="javascript:void(0);">互听的</a></li>
            </ul>




            <!--无配图的局部刷新-->
            <div id="ajax_html" style="display: none;">
                <dl class="weibo_content_data">
                    <dt><a href="javascript:void(0);">
                            <?php if($face == 0): ?><img src="/weibo/Public/Home/img/small_face.jpg" alt="">
                                <?php else: ?>
                                <img src="/weibo<?php echo ($face["small"]); ?>" alt=""><?php endif; ?>
                        </a></dt>
                    <dd>
                        <h4><a href="javascript:void(0);"><?php echo ($_SESSION['user_auth']['username']); ?></a></h4>
                        <p>#内容#</p>
                        <div class="footer">
                            <span class="time">刚刚发布</span>
                            <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <!--一张配图的局部刷新-->
            <div id="ajax_html1" style="display: none;">
                <dl class="weibo_content_data" >
                    <dt><a href="javascript:void(0);">
                            <?php if($face == 0): ?><img src="/weibo/Public/Home/img/small_face.jpg" alt="">
                                <?php else: ?>
                                <img src="/weibo<?php echo ($face["small"]); ?>" alt=""><?php endif; ?>
                        </a></dt>
                    <dd>
                        <h4><a href="javascript:void(0);"><?php echo ($_SESSION['user_auth']['username']); ?></a></h4>
                        <p>#内容#</p>
                        <div class="img" style="display: block;"><img src="/weibo#缩略图#" alt=""></div>
                        <div class="img_zoom" style="display: none;">
                            <ol>
                                <li class="in"><a href="javascript:void(0);">收起</a></li>
                                <li class="source"><a href="/weibo#原图#" target="_blank">查看原图</a></li>
                            </ol>
                            <img data="/weibo#放大图#" src="/weibo/Public/Home/img/loading_100.png" alt="">
                        </div>
                        <div class="footer">
                            <span class="time">刚刚发布</span>
                            <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <!--多张配图的局部刷新-->
            <div id="ajax_html2" style="display: none;">
                <dl class="weibo_content_data">
                    <dt><a href="javascript:void(0);">
                            <?php if($face == 0): ?><img src="/weibo/Public/Home/img/small_face.jpg" alt="">
                                <?php else: ?>
                                <img src="/weibo<?php echo ($face["small"]); ?>" alt=""><?php endif; ?>
                        </a></dt>
                    <dd>
                        <h4><a href="javascript:void(0);"><?php echo ($_SESSION['user_auth']['username']); ?></a></h4>
                        <p>#内容#</p>
                        #图片#
                        <div class="footer">
                            <span class="time">刚刚发布</span>
                            <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <!--多图的图片部分-->
            <div id="ajax_img"  style="display: none;">
                <div class="imgs"><img src="/weibo#缩略图#" alt=""></div>
                <div class="img_zoom" style="display: none;">
                    <ol>
                        <li class="in"><a href="javascript:void(0);">收起</a></li>
                        <li class="source"><a href="/weibo#原图#" target="_blank">查看原图</a></li>
                    </ol>
                    <img data="/weibo#放大图#" src="/weibo/Public/Home/img/loading_100.png" alt="">
                </div>
            </div>






            <?php if(is_array($topiclist)): $i = 0; $__LIST__ = $topiclist;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$obj): $mod = ($i % 2 );++$i;?><dl class="weibo_content_data">
                    <dt><a href="javascript:void(0);">
                            <?php if($obj["face"] == 0): if(empty($obj["domain"])): ?><a href="<?php echo U('Space/index',array('id'=>$obj['uid']));?>"><img src="/weibo/Public/Home/img/small_face.jpg" alt=""></a>
                                    <?php else: ?>
                                    <a href="/weibo/i/<?php echo ($obj["domain"]); ?>"><img src="/weibo/Public/Home/img/small_face.jpg" alt=""></a><?php endif; ?>


                                <?php else: ?>
                                <?php if(empty($obj["domain"])): ?><a href="<?php echo U('Space/index',array('id'=>$obj['uid']));?>"><img src="/weibo<?php echo ($obj["face"]["small"]); ?>" alt=""></a>
                                    <?php else: ?>
                                    <a href="/weibo/i/<?php echo ($obj["domain"]); ?>"><img src="/weibo<?php echo ($obj["face"]["small"]); ?>" alt=""></a><?php endif; endif; ?>
                        </a></dt>
                    <dd>
                        <h4>
                            <?php if(empty($obj["domain"])): ?><a href="<?php echo U('Space/index',array('id'=>$obj['uid']));?>"><?php echo ($obj["username"]); ?></a>
                            <?php else: ?>
                                <a href="/weibo/i/<?php echo ($obj["domain"]); ?>"><?php echo ($obj["username"]); ?></a><?php endif; ?>
                        </h4>
                        <!--文字内容部分-->
                        <?php if(empty($obj["rid"])): ?><p><?php echo ($obj["content"]); ?></p>
                            <?php else: ?>
                            <p><?php echo ($obj["content"]); ?></p>
                            <div class="forward_content">
                                <h4>
                                    <?php if(empty($obj["forward_content"]["domain"])): ?><a href="<?php echo U('Space/index',array('id'=>$obj["forward_content"]["uid"]));?>">@<?php echo ($obj["forward_content"]["username"]); ?></a>
                                        <?php else: ?>
                                        <a href="/weibo/i/<?php echo ($obj["forward_content"]["domain"]); ?>">@<?php echo ($obj["forward_content"]["username"]); ?></a><?php endif; ?>
                                </h4>
                                <!--转发源微博文字内容部分-->
                                    <p><?php echo ($obj["forward_content"]["content"]); ?></p>

                                <!--转发微博的图片部分-->
                                <?php switch($obj["forward_content"]["count"]): case "0": break;?>
                                    <?php case "1": ?><div class="img" style="display: block;"><img src="/weibo<?php echo ($obj["forward_content"]["image"]["0"]["thumb"]); ?>" alt=""></div>
                                        <div class="img_zoom" style="display: none;">
                                            <ol>
                                                <li class="in"><a href="javascript:void(0);">收起</a></li>
                                                <li class="source"><a href="/weibo<?php echo ($obj["forward_content"]["image"]["0"]["source"]); ?>" target="_blank">查看原图</a></li>
                                            </ol>
                                            <img data="/weibo<?php echo ($obj["forward_content"]["image"]["0"]["unfold"]); ?>" src="/weibo/Public/Home/img/loading_100.png" alt="">
                                        </div><?php break;?>
                                    <!--多张图片-->
                                    <?php default: ?>
                                    <?php if(is_array($obj["forward_content"]["image"])): $i = 0; $__LIST__ = $obj["forward_content"]["image"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$imgs): $mod = ($i % 2 );++$i;?><div class="imgs"><img src="/weibo<?php echo ($imgs["thumb"]); ?>" alt=""></div>
                                        <div class="img_zoom" style="display: none;">
                                            <ol>
                                                <li class="in"><a href="javascript:void(0);">收起</a></li>
                                                <li class="source"><a href="/weibo<?php echo ($imgs["source"]); ?>" target="_blank">查看原图</a></li>
                                            </ol>
                                            <img data="/weibo<?php echo ($imgs["unfold"]); ?>" src="/weibo/Public/Home/img/loading_100.png" alt="">
                                        </div><?php endforeach; endif; else: echo "" ;endif; endswitch;?>
                            </div><?php endif; ?>

                        <!--图片部分-->
                        <?php switch($obj["count"]): case "0": break;?>
                            <?php case "1": ?><div class="img" style="display: block;"><img src="/weibo<?php echo ($obj["image"]["0"]["thumb"]); ?>" alt=""></div>
                                <div class="img_zoom" style="display: none;">
                                    <ol>
                                        <li class="in"><a href="javascript:void(0);">收起</a></li>
                                        <li class="source"><a href="/weibo<?php echo ($obj["image"]["0"]["source"]); ?>" target="_blank">查看原图</a></li>
                                    </ol>
                                    <img data="/weibo<?php echo ($obj["image"]["0"]["unfold"]); ?>" src="/weibo/Public/Home/img/loading_100.png" alt="">
                                </div><?php break;?>
                            <!--多张图片-->
                            <?php default: ?>
                                <?php if(is_array($obj["image"])): $i = 0; $__LIST__ = $obj["image"];if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$imgs): $mod = ($i % 2 );++$i;?><div class="imgs"><img src="/weibo<?php echo ($imgs["thumb"]); ?>" alt=""></div>
                                    <div class="img_zoom" style="display: none;">
                                        <ol>
                                            <li class="in"><a href="javascript:void(0);">收起</a></li>
                                            <li class="source"><a href="/weibo<?php echo ($imgs["source"]); ?>" target="_blank">查看原图</a></li>
                                        </ol>
                                        <img data="/weibo<?php echo ($imgs["unfold"]); ?>" src="/weibo/Public/Home/img/loading_100.png" alt="">
                                    </div><?php endforeach; endif; else: echo "" ;endif; endswitch;?>
                        <div class="forward_box" style="display: none">
                            <span>请输入转发评论:</span>
                            <textarea class="forward_text"  name="forward_text"></textarea>
                            <input type="hidden" value="<?php echo ($obj["id"]); ?>" name="resource_id" class="resource_id">
                            <input type="submit" name="submit" class="forward_submit" value="转发">
                        </div>

                        <div class="footer">
                            <span class="time"><?php echo ($obj["time"]); ?>发布</span>
                            <span class="handler">赞(0) | <a class="forward" href="javascript:void(0);">转发</a> | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl><?php endforeach; endif; else: echo "" ;endif; ?>
            <div id="loadmore">加载更多 <img src="/weibo/Public/Home/img/loadmore.gif" alt=""></div>
        </div>
    </div>
        <div class="main_right">
                <?php if($face == 0): ?><img class="face" src="/weibo/Public/Home/img/big.jpg" alt="">
                    <?php else: ?>
                    <img class="face" src="/weibo<?php echo ($face["big"]); ?>" alt=""><?php endif; ?>
                <span class="user">
                    <a href="#"><?php echo ($_SESSION['user_auth']['username']); ?></a>
                </span>
        </div>

        <div id="error">...</div>
        <div id="loading" class="loading">数据交互中...</div>

</div>
<div id="footer">
  <div class="footer_left">&copy;20017-2022 哎哟喂 PHP 俱乐部.</div>
  <div class="footer_right">Powered by ThinkPHP.</div>
</div>

</body>
</html>