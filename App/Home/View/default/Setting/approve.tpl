<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__CSS__/setting.css">
</block>

<block name="main">
    <include file="Setting/main_left" />
    <div class="main_right">
        <h2>@提及到我</h2>
        <dl>
            <empty name="approve">
                <p>没有任何提及您的信息</p>
                <else/>
                <foreach name="approve" item="obj">
                    <switch name="obj.state">
                        <case value="0"><p>验证名: <strong>{$obj.name}</strong>---{$obj.info}　　[<span class="red">认证中</span>]　{$obj.time}</p>
                        </case>

                        <case value="1"><p>验证名: <strong>{$obj.name}</strong>---{$obj.info}　　[<span class="green">通过</span>]</p>
                        </case>
                    </switch>
                </foreach>
            </empty>
            <p><a  id="add-button" href="javascript:void (0);" class="easyui-linkbutton">添加认证</a></p>

        </dl>
    </div>
    <form id="approve">
        <ol class="app-error"></ol>
        <input type="hidden" name="uid" value="{:session('user_auth')['id']}">
        <p>认证名:<input type="text" class="name" name="name"></p>
        <p>认证信息: <textarea name="info" id="info" cols="25" rows="3"></textarea></p>
    </form>
    <div id="loading">...</div>
    <div id="error">...</div>
</block>


