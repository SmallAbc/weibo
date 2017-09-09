$(function () {
    $('#loginbox').dialog({
        title:'管理员登录',
        height:200,
        width:270,
        modal:true,
        resizable:false,
        draggable:false,
        iconCls:'icon-tip',
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        },
        buttons:'#btn'
    });

    //验证用户框信息
    $('#admin').validatebox({
        required:true,
        missingMessage:'请输入管理员账号!',
        invalidMassage:'账号不合法!'
    });

    //验证密码框信息
    $('#password').validatebox({
        required:true,
        validType:'length[6,30]',
        missingMessage:'请输入管理员密码!',
        invalidMassage:'密码须在6-30位!'
    });

    
    //登录按钮,登录提交
    $('#btn a').on('click',function () {
        if(!$('#admin').validatebox('isValid')){
            $('#admin').focus();
        }else if(!$('#password').validatebox('isValid')){
            $('#password').focus();
        }else{
               $.ajax({
                    url:ThinkPHP['MODULE']+'/Login/checkManager',
                    type:'post',
                   data:{
                        manager:$('#admin').val(),
                       password:$('#password').val()
                   },
                   beforeSend:function () {
                     $.messager.progress({
                         text:'登录中...'
                     });
                   },
                   success:function (data,reText,msg) {
                       $.messager.progress('close');
                       if(data>0){
                        location.href=ThinkPHP['INDEX'];
                       }else{
                           $.messager.alert('登录失败!','管理员账号或密码错误!','warning',function () {
                               $('#password').select();
                           });
                       }
                   }
                   
            })
        }

    })


    //加载后光标定位之用户框
    $('#admin').focus();

});