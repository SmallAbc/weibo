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
    $('#toolbar a').on('click',function () {
        $('#user').datagrid('reload');
    })




});