<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JCROP__/js/jquery.Jcrop.js"></script>
    <script type="text/javascript" src="__UPLOADIFY__/jquery.uploadify.js"></script>
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__JCROP__/css/jquery.Jcrop.css">
    <link rel="stylesheet" href="__UPLOADIFY__/uploadify.css">
    <link rel="stylesheet" href="__CSS__/setting.css">
    <link rel="stylesheet" href="__CSS__/avatar.css">
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
       <!-- <div class="face">
            <p>请上传一张尺寸大于200X200像素的头像</p>
            <div >
                <img id="avatar" src="__IMG__/big.jpg">
                <div id="preview-pane">
                    <div class="preview-container">
                        <img id="crop" src="__ROOT__/Uploads/2017-08-23/180_599ce8ae4866b.jpg" class="jcrop-preview" alt="Preview" style="width: 687px; height: 456px; margin-left: -277px; margin-top: -89px; display: none">
                    </div>
                </div>
            </div>

        </div>
    </div>-->
                <div class="inwrap">
                    <div class="example">
                        <img src="__IMG__/big.jpg" id="target" alt="">
                        <input type="file" name="file" id="file">
                        <input type="button" name="save" id="save" style="display:none;" value="保存">
                        <input type="button" name="cancel" id="cancel" style="display: none;" value="取消">
                        <input type="hidden" id="x" name="x">
                        <input type="hidden" id="y" name="y">
                        <input type="hidden" id="w" name="h">
                        <input type="hidden" id="h" name="h">
                        <input type="hidden" id="imgurl" name="imgurl">
                        <div id="preview-pane" style="display: none">
                            <div class="preview-container">
                                <img src="__IMG__/big.jpg" class="jcrop-preview" alt="">
                            </div>
                        </div>
                    </div>

                </div>
    <div id="loading">...</div>
    <div id="error">...</div>

</block>