//通过 $.fn.validatebox.defaults 重写默认的 defaults。(扩展)
//验证框（validatebox）是为了验证表单输入字段而设计的。
//扩展domain验证

$(function () {
   $('#approve').datagrid({
       url:ThinkPHP['MODULE']+'/Approve/getList',
       fit:true,
       fitColumns:true,
       striped:true,
       rownumbers:true,
       border:false,
       toolbar:'#toolbar3',
       pagination:true,
       pageNumber:1,
       pageSize:20,
       sortName:'create_date',
       sortOrder:'desc',
       columns:[[
           {
               field:'id',
               title:'编号',
               width:100,
               checkbox:true,
           }   ,             {
               field:'name',
               title:'认证名称',
               width:100,
           }   ,
           {
               field:'info',
               title:'认证信息',
               width:100,
           }  ,

           {
               field:'create_date',
               title:'申请时间',
               width:100,
               order:'asc', //该属性自版本 1.3.2 起可用。
               sortable:true,
           } ,
           {
               field:'state',
               title:'状态',
               width:100,
               sortable:true,
           } ,           {
               field:'approve_date',
               title:'通过时间',
               width:100,
               sortable:true,
           } ,
           {
               field:'uid',
               title:'申请人ID',
               width:100,
           },
       ]]
   })




    //更新按钮
    $('#refresh').on('click',function () {
        $('#approve').datagrid('reload');
    })


    //查询按钮
    $('#search').on('click',function () {
        $('#approve').datagrid('load',{
            username:$.trim($('input[name="username"]').val()),
            datefrom:$('input[name="date_from"]').val(),
            dateto:$('input[name="date_to"]').val()
        });
    })

    //删除按钮
    $('#delete').on('click',function () {
        $.messager.confirm('请确认','请确认是否删除这些信息,删除后无法恢复!',function (r) {
            if(r){
                var obj=$('#approve').datagrid('getSelections');
                var len=obj.length;
                ids=[];
                if(len>0){
                    for(var i=0;i<len;i++){
                        ids.push(obj[i]['id']);
                    }
                    console.log(ids.join(','));
                }
                $.ajax({
                    url:ThinkPHP['MODULE']+'/Approve/delete',
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
                            $('#approve').datagrid('reload');
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
        $('#approve').datagrid('unselectAll');
    })
    //工具栏新增按钮
    $('#add').on('click',function () {
        $('#approve-add').dialog('open');
    })

    //工具栏通过按钮
    $('#edit').on('click',function(){
        var select=$('#approve').datagrid('getSelections');
        var ids=[];
        $.each(select,function (key,val) {
           ids.push(val['id']);
        });
        ids=ids.join(',');
        if(select.length==0){
            $.messager.alert('提示','请至少选择一行数据进行修改','info');
        }else{
            $.ajax({
                url:ThinkPHP['MODULE']+'/Approve/setState',
                type:'post',
                data:{
                    ids:ids
                },
                beforeSend:function () {
                $.messager.progress({
                    text:'正在更新数据...'
                })
                },
                success:function (data,responText,msg) {
                    $.messager.progress('close');
                    if(data){
                        $.messager.show({
                            msg:data+'条数据被更新!',
                            timeout:5000,
                            showType:'slide'
                        });
                        $('#approve').datagrid('reload');
                    }else{
                        $.messager.alert('提示','更新失败!原因:未有数据被勾选!','error');
                    }

                }
            })

        }

    })


    // 修改用户信息界面
    $('#approve-edit').dialog({
        title:'修改信息',
        width:350,
        height:420,
        modal:true,
        closed:true,
        iconCls:'icon-user',
        buttons:[
            {
                text:'修改',
                iconCls:'icon-edit',
                handler:function () {
                    if($('#approve-edit').form('validate')){
                        $.ajax({
                            url:ThinkPHP['MODULE']+'/User/edit',
                            type:'post',
                            data:{
                                id:$('#approve-edit #id').val(),
                                password:$('#approve-edit #password').val(),
                                email:$('#approve-edit #email').val(),
                                domain:$('#approve-edit #domain').val(),
                                face:'/face/small_face.jpg',
                                info:$('#approve-edit #info').val(),
                            },
                            beforeSend:function () {
                                $.messager.progress({
                                    text:'数据处理中...',
                                });
                            },
                            success:function(data,reText,msg){
                                $.messager.progress('close');
                                if(data>=0){
                                    $.messager.show({
                                        title:'提示',
                                        msg:'用户信息修改成功!',
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
                },

            },
            {
                text:'重置',
                iconCls:'icon-redo'
            }
        ],
        onClose:function () {
            $('#approve-edit').form('reset');
        }
    })











});