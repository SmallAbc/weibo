<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__CSS__/setting.css">
    <link rel="stylesheet" href="__CSS__/domain.css">
</block>

<block name="main">
    <include file="Setting/main_left" />
    <div class="main_right">
        <h2>头像设置</h2>

            <p>域名设置,域名要求:4-10位之间的数字与字母组合,注册后不能更改!!!</p>
                <div id="domain">
                    <empty name="domain">
                        <label for="domain">域名:</label><input type="text" class="domain" name="domain">
                        <input type="submit" name="submit" value="提交" class="domainbutton">
                        <else/>
                        <p><span>域名:</span> <a href="__ROOT__/i/{$domain}">http://{:$_SERVER['SERVER_NAME']}__ROOT__/i/{$domain}</a></p>
                    </empty>

                </div>
    <div id="loading">...</div>
    <div id="error">...</div>

</block>