<?php
return array(
    //'配置项'=>'配置值'

    //设置模板替换变量
    'tmpl_parse_STRING'=>array(
      '__JS__'=>__ROOT__.'/Public/'.MODULE_NAME.'/js',
      '__CSS__'=>__ROOT__.'/Public/'.MODULE_NAME.'/css',
      '__IMG__'=>__ROOT__.'/Public/'.MODULE_NAME.'/img',
      '__UPLOADIFY__'=>__ROOT__.'/Public/'.MODULE_NAME.'/uploadify',
    ),


    //cookie密钥
    'COOKIE_KEY'=>'www.ayov.com',

    //默认错误跳转对应的模板文件
    'TMPL_ACTION_ERROR'=>'public/jump',

    'TMPL_ACTION_SUCCESS'=>'public/jump',

    //图片上传路径
    'UPLOAD_PATH'=>'./Uploads/'



);