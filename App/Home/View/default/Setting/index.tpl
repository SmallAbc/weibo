<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__CSS__/setting.css">
</block>

<block name="main">
    <div class="main_left">
        <ul>
            <li><a href="javascript:void(0);" class="selected">个人设置</a></li>
            <li><a href="javascript:void(0);">头像设置</a></li>
        </ul>
    </div>
    <div class="main_right">
        <h2>个人设置</h2>
        <dl>
            <dd>账号名称:XXX</dd>
            <dd>电子邮箱: <input type="text" name="email" class="text" value="XXX@xx.com"><spqn class="star">(*)</spqn></dd>
            <dd><span class="introtitle">个人简介:</span><textarea name="intro" id="intro" ></textarea></dd>
            <dd><input type="submit" class="submit" value="修改"></dd>
        </dl>
    </div>

</block>