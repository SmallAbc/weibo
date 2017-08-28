<meta charset="UTF-8">
<script type="text/javascript" src="__JS__/jquery.js"></script>
<script type="text/javascript" src="__JS__/jquery.ui.js"></script>
<script type="text/javascript" src="__JS__/base.js"></script>
<link rel="stylesheet" href="__CSS__/jquery.ui.css">
<link rel="stylesheet" href="__CSS__/base.css">
<block name="head"></block>


<title>微博系统首页</title>
<script type="text/javascript">var ThinkPHP={
        'MODULE':'__MODULE__',
        'IMG':'__PUBLIC__/{$Think.MODULE_NAME}/img',
        'AVATAR':'Uploads/Faces',
        'FACE':'__PUBLIC__/{$Think.MODULE_NAME}/face',
        'INDEX':'{:U("index/index")}',
        'UPLOADIFY':'__UPLOADIFY__',
        'ROOT':'__ROOT__',
        //用于上传头像时,假如取消上传,回归的图片路径
        'BIG':'{:session("user_auth")["face"]["big"]}'
    };
</script>