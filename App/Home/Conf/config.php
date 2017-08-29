<?php
return array(
    //'配置项'=>'配置值'

    //设置模板替换变量
    'tmpl_parse_STRING'=>array(
      '__JS__'=>__ROOT__.'/Public/'.MODULE_NAME.'/js',
      '__CSS__'=>__ROOT__.'/Public/'.MODULE_NAME.'/css',
      '__IMG__'=>__ROOT__.'/Public/'.MODULE_NAME.'/img',
      '__UPLOADIFY__'=>__ROOT__.'/Public/'.MODULE_NAME.'/uploadify',
      '__SCROLLUP__'=>__ROOT__.'/Public/'.MODULE_NAME.'/scrollup',
      '__JCROP__'=>__ROOT__.'/Public/'.MODULE_NAME.'/Jcrop',
    ),


    //cookie密钥
    'COOKIE_KEY'=>'www.ayov.com',

    //默认错误跳转对应的模板文件
    'TMPL_ACTION_ERROR'=>'public/jump',

    'TMPL_ACTION_SUCCESS'=>'public/jump',

    //图片上传路径
    'UPLOAD_PATH'=>'./Uploads/',
    //头像上传路径
    'FACE_PATH'=>'./Uploads/Faces/',

    //路由开启
    'URL_ROUTER_ON'=>true,
    //动态路由 注意：为了不影响动态路由的遍历效率，静态路由采用URL_MAP_RULES定义和动态路由区分开来
    'URL_ROUTE_RULES'=>array(
        'i/:domain'=>'Space/index'
    )




);