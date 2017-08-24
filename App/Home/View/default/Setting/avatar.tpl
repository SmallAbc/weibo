<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JCROP__/js/jquery.Jcrop.js"></script>
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__JCROP__/css/jquery.Jcrop.css">
    <link rel="stylesheet" href="__CSS__/setting.css">
</block>

<block name="main">
    <div class="main_left">
        <ul>
            <li><a href="{:U('Setting/index')}" >个人设置</a></li>
            <li><a href="{:U('Setting/avatar')}" class="selected">头像设置</a></li>
        </ul>
    </div>
    <div class="main_right">
        <h2>头像设置</h2>
        <div><img id="avatar" src="__ROOT__/Uploads/2017-08-23/550_599ce8ae4866b.jpg"></div>
        <div id="preview-pane">
            <div class="preview-container">
                <img src="__ROOT__/Uploads/2017-08-23/550_599ce8ae4866b.jpg" class="jcrop-preview" alt="Preview" style="width: 687px; height: 456px; margin-left: -277px; margin-top: -89px;">
            </div>
        </div>
    </div>
    <div id="loading">...</div>
    <div id="error">...</div>

</block>