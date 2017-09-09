<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="__EASYUI__/jquery.min.js"></script>
    <script type="text/javascript" src="__EASYUI__/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="__EASYUI__/locale/easyui-lang-zh_CN.js"></script>
    <script type="text/javascript" src="__JS__/index.js"></script>
    <link rel="stylesheet" href="__EASYUI__/themes/default/easyui.css">
    <link rel="stylesheet" href="__EASYUI__/themes/icon.css">
    <link rel="stylesheet" href="__CSS__/index.css">
    <include file="public/base" />
    <title>微博系统后台</title>
</head>
<body class="easyui-layout">
<div data-options="region:'north',noheader:true,split:true" style="height:60px;">
    <div class="logo">微博后台管理</div>
    <div class="logout"><span>{:session('admin')}</span>,欢迎您!　｜　<a id="logout" href="__MODULE__/Login/logout">退出</a></div>
</div>
<div data-options="region:'south',noheader:true,split:true" style="height:35px; line-height: 30px; text-align: center">
    &copy;20017-2022 哎哟喂 PHP 俱乐部.
</div>
<div data-options="region:'west',title:'West',split:true" style="width:170px;"></div>
<div data-options="region:'center',title:'center title'" style="padding:5px;background:#eee;"></div>
</body>
</html>