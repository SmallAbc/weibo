//通过 $.fn.validatebox.defaults 重写默认的 defaults。(扩展)
//验证框（validatebox）是为了验证表单输入字段而设计的。
//扩展domain验证
$.extend($.fn.validatebox.defaults.rules,{
    domain:{
        validator:function (value) {
            return /^\w{4,10}$/.test(value);
        },
        message:'请输入正确的个性域名,必须是数字字母或下划线组合的4-10位'
    }
})

$(function () {
   $('#user').datagrid({
       url:ThinkPHP['MODULE']+'/User/getList',
       fit:true,
       fitColumns:true,
       striped:true,
       rownumbers:true,
       border:false,
       toolbar:'#toolbar',
       pagination:true,
       pageNumber:1,
       pageSize:20,
       sortName:'create',
       sortOrder:'desc',
       columns:[[
           {
               field:'id',
               title:'编号',
               width:100,
               checkbox:true,
           }   ,             {
               field:'username',
               title:'用户名',
               width:100,
           }   ,
           {
               field:'email',
               title:'电子邮件',
               width:100,
           }  ,
           {
               field:'domain',
               title:'个性域名',
               width:100,
           } ,
           {
               field:'create',
               title:'注册时间',
               width:100,
               order:'asc', //该属性自版本 1.3.2 起可用。
               sortable:true,
           } ,
           {
               field:'last_login',
               title:'最后登录时间',
               width:100,
               sortable:true,
           } ,
           {
               field:'last_ip',
               title:'最近登录IP',
               width:100,
           },
       ]]
   })




    //更新按钮
    $('#refresh').on('click',function () {
        $('#user').datagrid('reload');
    })


    //查询按钮
    $('#search').on('click',function () {
        $('#user').datagrid('load',{
            username:$.trim($('input[name="username"]').val()),
            datefrom:$('input[name="date_from"]').val(),
            dateto:$('input[name="date_to"]').val()
        });
    })

    //删除按钮
    $('#delete').on('click',function () {
        $.messager.confirm('请确认','请确认是否删除这些信息,删除后无法恢复!',function (r) {
            if(r){
                var obj=$('#user').datagrid('getSelections');
                var len=obj.length;
                ids=[];
                if(len>0){
                    for(var i=0;i<len;i++){
                        ids.push(obj[i]['id']);
                    }
                    console.log(ids.join(','));
                }
                $.ajax({
                    url:ThinkPHP['MODULE']+'/User/delete',
                    type:'post',
                    data:{
                        ids:ids.join(',')
                    },
                    beforeSend:function () {
                        $.messager.progress({
                            text:'数据删除中...'
                        });
                    },
                    success:function (data,reText,msg) {

                      $.messager.progress('close');
                        if(data){
                            $.messager.show({
                                msg:data+'条数据被删除!',
                                timeout:5000,
                                showType:'slide'
                            });
                            $('#user').datagrid('reload');
                        }else{
                            $.messager.alert('提示','删除失败!原因:未有数据被勾选!','error');
                        }

                    }
                })
            }
        })

    })
    
    
    //工具栏取消选定按钮
    $('#unselect').on('click',function () {
        $('#user').datagrid('unselectAll');
    })
    //工具栏新增按钮
    $('#add').on('click',function () {
        $('#user-add').dialog('open');
    })

    //工具栏修改按钮
    $('#edit').on('click',function(){
        var select=$('#user').datagrid('getSelections');
        if(select.length>1){
            $.messager.alert('提示','每次只能选择一个用户进行修改','info');
        }else if(select.length==0){
            $.messager.alert('提示','需要选择一个用户进行修改','info');
        }else{
            var id=select[0]['id'];
            $.ajax({
                url:ThinkPHP['MODULE']+'/User/getOne',
                type:'post',
                data:{
                    id:id,
                },
                beforeSend:function () {

                },
                success:function (data,responText,msg) {
                    alert(data['username']);
                    $('#user-edit #name').val(data.username);
                        $('#user-edit #email').val(data.email);
                    if(data.domain){
                        $('#user-edit #domain').val(data.domain).attr('readonly','readonly');
                    }
                        $('#user-edit #info').val(data.extend.intro);
                }
            })
            $('#user-edit').dialog('open');

        }

    })


    // 修改用户信息界面
    $('#user-edit').dialog({
        title:'修改信息',
        width:350,
        height:420,
        modal:true,
        closed:true,
        buttons:[
            {
                text:'修改',
                iconCls:'icon-edit',
                handler:function () {
                    if($('#user-edit').form('validate')){
                        $.ajax({
                            url:ThinkPHP['MODULE']+'/User/edit',
                            type:'post',
                            data:{
                                username:$('#user-edit #name').val(),
                                password:$('#user-edit #password').val(),
                                email:$('#user-edit #email').val(),
                                domain:$('#user-edit #domain').val(),
                                face:'/face/small_face.jpg',
                                info:$('#user-edit #info').val(),
                            },
                            beforeSend:function () {
                                $.messager.progress({
                                    text:'数据处理中...',
                                });
                            },
                            success:function(data,reText,msg){
                                $.messager.progress('close');
                                if(data>0){
                                    $.messager.show({
                                        title:'提示',
                                        msg:'用户新增成功!',
                                        timeout:5000,
                                        showType:'slide'
                                    })
                                }else{
                                    switch (data){
                                        case '-5':
                                            $.messager.alert('提示','该用户名已被占用!','waring');
                                            break;

                                        case '-6':
                                            $.messager.alert('提示','该邮箱已被占用!','waring');
                                            break;
                                        case '-7':
                                            $.messager.alert('提示','该域名已被占用!','waring');
                                            break;

                                        default:
                                            $.messager.alert('提示','未知错误,请刷新重试!','waring');
                                            break;
                                    }
                                }
                            }
                        })
                    }
                }
            },
            {
                text:'重置',
                iconCls:'icon-redo'
            }
        ]
    })


    //添加用户界面
    $('#user-add').dialog(
        {
        title:'新增用户',
        width:350,
        height:420,
        closed:true,
        modal:true,
        iconCls:'icon-user-add',
        buttons:[
            {
                text:'添加',
                iconCls:'icon-add-new',
                handler:function () {
                   if($('#user-add').form('validate')){
                       $.ajax({
                           url:ThinkPHP['MODULE']+'/User/register',
                           type:'post',
                           data:{
                               username:$('#user-add #name').val(),
                               password:$('#user-add #password').val(),
                               email:$('#user-add #email').val(),
                               domain:$('#user-add #domain').val(),
                               face:'/face/small_face.jpg',
                               info:$('#user-add #info').val(),
                           },
                           beforeSend:function () {
                               $.messager.progress({
                                   text:'数据处理中...',
                               });
                           },
                           success:function(data,reText,msg){
                               $.messager.progress('close');
                            if(data>0){
                                $.messager.show({
                                    title:'提示',
                                    msg:'用户新增成功!',
                                    timeout:5000,
                                    showType:'slide'
                                })
                            }else{
                                switch (data){
                                    case '-5':
                                        $.messager.alert('提示','该用户名已被占用!','waring');
                                        break;

                                    case '-6':
                                        $.messager.alert('提示','该邮箱已被占用!','waring');
                                        break;
                                    case '-7':
                                        $.messager.alert('提示','该域名已被占用!','waring');
                                        break;

                                    default:
                                        $.messager.alert('提示','未知错误,请刷新重试!','waring');
                                        break;
                                }
                            }
                           }
                       })
                   }
                }
            },
            {
                text:'重置',
                iconCls:'icon-redo',
                handler:function () {
                    $('#user-add').form('reset');
                }
                
            }
        ],
        onClose:function () {
            $('#user-add').form('reset');
        },
        onOpen:function () {
            $('#user-add #name').focus();
        }
    }
    )




    //数据验证(用户名)
    $('#user-add #name').validatebox({
        required:true,
        missingMessage:'请输入2到20位用户名',
        validType:'length[2,20]',
    })


    //数据验证(密码)
    $('#user-add #password').validatebox({
        required:true,
        missingMessage:'请输入6到30位密码',
        validType:'length[6,30]',
    })


    //数据验证(邮件)
    $('#user-add #email').validatebox({
        required:true,
        missingMessage:'请输入邮箱地址',
        validType:'email',
    })

    //数据验证(域名)
    $('#user-add #domain').validatebox({
        validType:'domain',
    })




});