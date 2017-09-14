$(function () {
   $('#comment').datagrid({
       url:ThinkPHP['MODULE']+'/Comment/getList',
       fit:true,
       fitColumns:true,
       striped:true,
       rownumbers:true,
       border:false,
       toolbar:'#toolbar2',
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
               field:'content',
               title:'内容',
               width:150,
           }   ,
           {
               field:'topic',
               title:'所属文章',
               width:150,
           }  ,

           {
               field:'create_date',
               title:'发表时间',
               width:100,
               order:'asc', //该属性自版本 1.3.2 起可用。
               sortable:true,
           } ,
           {
               field:'username',
               title:'发布者',
               width:100,
               sortable:true,
           } ,
           {
               field:'ip',
               title:'最近登录IP',
               width:100,
           },
       ]]
   })




    //更新按钮
    $('#refresh').on('click',function () {
        $('#comment').datagrid('reload');
    })


    //查询按钮
    $('#search').on('click',function () {
        $('#comment').datagrid('load',{
            keyword:$.trim($('input[name="keyword"]').val()),
            datefrom:$('input[name="date_from"]').val(),
            dateto:$('input[name="date_to"]').val()
        });
    })

    //删除按钮
    $('#delete').on('click',function () {
        $.messager.confirm('请确认','请确认是否删除这些信息,删除后无法恢复!',function (r) {
            if(r){
                var obj=$('#comment').datagrid('getSelections');
                var len=obj.length;
                ids=[];
                if(len>0){
                    for(var i=0;i<len;i++){
                        ids.push(obj[i]['id']);
                    }
                    console.log(ids.join(','));
                }
                $.ajax({
                    url:ThinkPHP['MODULE']+'/comment/delete',
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
                            $('#comment').datagrid('reload');
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
        $('#comment').datagrid('unselectAll');
    })
    //工具栏新增按钮
    $('#add').on('click',function () {
        $('#comment-add').dialog('open');
    })

    //工具栏修改按钮
    $('#edit').on('click',function(){
        var select=$('#comment').datagrid('getSelections');
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
                $.messager.progress({
                    text:'正在获取数据...'
                })
                },
                success:function (data,responText,msg) {
                    $.messager.progress('close');
                    $('#comment-edit #id').val(data.id);
                    $('#comment-edit #name').val(data.username);
                    $('#comment-edit #email').val(data.email);
                    if(data.domain){
                        $('#comment-edit #domain').val(data.domain);
                    }
                    if(data.extend){
                        $('#comment-edit #info').val(data.extend.intro);
                    }
                    $('#comment-edit').dialog('open');

                }
            })

        }

    })











});