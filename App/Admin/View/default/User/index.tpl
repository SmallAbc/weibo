<script type="text/javascript" src="__JS__/user.js"></script>
<table id="user">
<!--datagrid-->
</table>
<div id="toolbar">
    <div style="margin:5px 0 5px 10px ;">
        <a id="delete" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-delete-new">删除</a>
        <a id="refresh" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-reload">更新</a>
        <a id="add" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-add">新增</a>
    </div>
    <div style="padding: 5px">
        账 号: <input type="text" class="username" name="username" style="width: 140px; margin-right: 30px;">
        注册时间从: <input type="text" name="date_from" class="easyui-datebox" style="width: 100px;" editable="false" >
        到: <input type="text" name="date_to" class="easyui-datebox" style="width: 100px;" editable="false" >
        <a id="search" href="javascript:void (0);" style="margin-left: 10px;" class="easyui-linkbutton" iconCls="icon-search">查询<a/>
    </div>
</div>
<form action="" id="user-add" style="text-align: center;">
    <p>用户账号: <input type="text" name="name" id="name"></p>
    <p>用户密码: <input type="password" name="password" id="password"></p>
    <p>电子邮件: <input type="text" name="email" id="email"></p>
    <p>个人域名: <input type="text" name="domain" id="domain"></p>
    <p>默认图像: <a href="javascript:alert();"><img src="__PUBLIC__/Home/img/small_face.jpg" alt=""></a></p>
    <p>个人简介: <textarea name="info" id="info" cols="16" rows="3"></textarea></p>
</form>



