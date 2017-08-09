<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="__JS__/jquery.js"></script>
    <script type="text/javascript" src="__JS__/Login.js"></script>
    <script type="text/javascript" src="__JS__/jquery.ui.js"></script>
    <script type="text/javascript" src="__JS__/jquery.form.js"></script>
    <script type="text/javascript" src="__JS__/jquery.validate.js"></script>
    <link rel="stylesheet" href="__CSS__/jquery.ui.css">
    <link rel="stylesheet" href="__CSS__/Login.css">
    <script type="text/javascript">var ThinkPHP={
        'IMG':'__PUBLIC__/{$Think.MODULE_NAME}/img'
        };
    </script>
    <title>微博系统Login</title>
</head>
<body>
<div id="header"></div>
<div id="main">
    <form id="login"  >
        <div class="top">
            <input type="text" name="user" placeholder="用户名">
            <input type="password" name="password" placeholder="密码">
            <input type="submit" name="submit" value="Login">
        </div>
        <div class="bottom">
            <a id="reg_link" href="javascript:void (0)" >注册新用户</a>
            <a href="javascript:void (0)">忘记密码</a>
        </div>
    </form>
</div>
<div id="footer"></div>
<p class="footer_text">&copy;20017-2022 哎哟喂 PHP 俱乐部. Powered by ThinkPHP.</p>

<form  id="register" >
    <ol class="reg_error"></ol>
    <p>
        <label for="user" >账号:</label>
        <input type="text" name="username" id="user" class="text" placeholder="用户名不得小于2位或大于20位" >
        <span class="star">*</span>
    </p>
    <p>
        <label for="password" >密码:</label>
        <input type="password" name="password" id="password" class="text" placeholder="密码不得小于6位或大于30位" >
        <span class="star">*</span>
    </p>
    <p>
        <label for="repassword" >确认:</label>
        <input type="password" name="repassword" id="repassword" class="text" placeholder="两次密码须一致" >
        <span class="star">*</span>
    </p>
    <p>
        <label for="email" >邮件:</label>
        <input type="text" name="email" id="email" class="text" placeholder="例如:aiyov@163.com" >
        <span class="star">*</span>
    </p>
</form>

</body>
</html>