$(function () {

    $('.app').hover(function () {
        $(this).css({
            'background':'#ccc',
            'color':'#C67639',
            'font-weight':'bold'
        }).find('.list').show();
    },function () {
        $(this).css({
            'background':'',
            'color':'#fff',
            'font-weight':'normal'
        }).find('.list').hide();
    });

    //error dialog
    $('#error').dialog({
        height:40,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false

    }).parent().find('.ui-dialog-titlebar').hide();

    //loading dialog
    $('#loading').dialog({
        height:50,
        width:170,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false
    }).parent().find('.ui-dialog-titlebar').hide();

    //@信息提示框关闭按钮
    $('.referbox').find('i').click(function () {
        $('.referbox').remove();
    })


    //加载完成后执行一遍refer()
    refer();
    //refer轮询刷新
    function refer(){
        $.ajax({
            url:ThinkPHP['MODULE']+'/Home/getReferCount',
            type:'post',
            data:{

            },
            success:function (data,reText,msg) {
                if(data>0){
                    $('.referbox').find('span').text('('+data+')').addClass('red');
                    $('.referbox').show();
                    $('.refercount').text('('+data+')');
                }else{
                    $('.referbox').hide();
                }
            }
        })
        setTimeout(function () {
            refer();
        },1000);
    }


});