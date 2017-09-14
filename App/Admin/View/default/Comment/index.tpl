<script type="text/javascript" src="__JS__/comment.js"></script>
<table id="comment">
<!--datagrid-->
</table>
<div id="toolbar2">
    <div style="margin:5px 0 5px 10px ;">
        <a id="add" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-add" style="margin-right: 10px;">新增</a>
        <a id="edit" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-edit" style="margin-right: 10px;">修改</a>
        <a id="delete" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-delete-new" style="margin-right: 10px;">删除</a>
        <a id="unselect" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-redo" style="margin-right: 10px;">取消选定</a>
        <a id="refresh" href="javascript:void (0);" class="easyui-linkbutton" iconCls="icon-reload" style="margin-right: 10px;">更新</a>
    </div>
    <div style="padding: 5px">
        关键字: <input type="text" class="keyword" name="keyword" style="width: 140px; margin-right: 30px;">
        发布时间从: <input type="text" name="date_from" class="easyui-datebox" style="width: 100px;" editable="false" >
        到: <input type="text" name="date_to" class="easyui-datebox" style="width: 100px;" editable="false" >
        <a id="search" href="javascript:void (0);" style="margin-left: 10px;" class="easyui-linkbutton" iconCls="icon-search">查询<a/>
    </div>
</div>

<!--修改会员信息界面-->
<form action="" id="user-edit" style="text-align: center;">
    <input type="hidden" name="id" id="id">
    <p>用户账号: <input type="text" name="name" id="name" disabled="disabled"></p>
    <p>用户密码: <input type="password" name="password" id="password" placeholder='留空则不修改'></p>
    <p>电子邮件: <input type="text" name="email" id="email"></p>
    <p>个人域名: <input type="text" name="domain" id="domain"></p>
    <p>默认图像: <a href="javascript:alert();"><img src="__PUBLIC__/Home/img/small_face.jpg" alt=""></a></p>
    <p>个人简介: <textarea name="info" id="info" cols="16" rows="3"></textarea></p>
</form>



