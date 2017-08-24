$(function(){
    //点击修改资料
    $('.submit').button().click(function () {
        $.ajax({
            url:ThinkPHP['MODULE']+'/Setting/updateUser',
            type:'post',
            data:{
                email:$('input[name="email"]').val(),
                intro:$('textarea[name="intro"]').val()
            },
            beforeSend:function () {
                $('#loading').dialog('open').html('正在更新!').addClass('loading');
            },
            success:function (data,responText,msg) {
                //todo,data在父表更新时才返回1,respontest,不管有没有更新都返回success
                if(responText==='success'){
                    $('#loading').dialog().html('更新成功!').removeClass('loading').addClass('succ');
                    setTimeout(function () {
                        $('#loading').dialog('close').html('').removeClass('succ');
                    },2000)
                }else{
                    $('#loading').dialog().html('没有任何更新!').removeClass('loading').addClass('succ');
                    setTimeout(function () {
                        $('#loading').dialog('close').html('').removeClass('succ');
                    },2000)
                }
            }
            })
    })



});