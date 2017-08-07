$(function () {
    //random Admin Login backround
    var rand=Math.round(Math.random()*4+1);
    $('body')
        .css('background','url('+ThinkPHP.IMG+'/login_bg'+rand+'.jpg)'+'no-repeat')
        .css('background-size','cover');

    //登录按钮
    $('#login').find('input[type="submit"]').button();

    //创建注册对话框
    $('#register').dialog({
        width:430,
        height:330,
        // title:'注册新用户',     //放在模板内的#register的title了
        modal:true,
        resizable:false,
        autoOpen:false,
        closeText:'关闭',
        buttons:[{
            text:'提交',
            click:function(e){

            }
        }],
    });



    //点击注册打开窗口
    $('#reg_link').click(function () {
        $('#register').dialog('open');
    });
});