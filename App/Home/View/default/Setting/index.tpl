<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__CSS__/setting.css">
</block>

<block name="main">
    <div class="main_left">
        <ul>
            <li><a href="{:U('Setting/index')}" class="selected">个人设置</a></li>
            <li><a href="{:U('Setting/avatar')}">头像设置</a></li>
        </ul>
    </div>
    <div class="main_right">
        <h2>个人设置</h2>
        <dl>
            <dd>账号名称:{$user.username}</dd>
            <dd>电子邮箱: <input type="text" name="email" class="text" value="{$user.email}"><spqn class="star">(*)</spqn></dd>
            <dd><span class="introtitle">个人简介:</span><textarea name="intro" id="intro" >{$user.extend.intro}</textarea></dd>
            <dd><input type="submit" class="submit" value="修改"></dd>
        </dl>
    </div>
    <div id="loading">...</div>
    <div id="error">...</div>

</block>