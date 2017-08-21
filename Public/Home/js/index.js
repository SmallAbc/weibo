$(function () {
    //导航的消息和账号的下拉菜单
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



    //微博整体高度协调
    if($('.main_left').height()>800){
        var height=$('.main_left').height();
        $('.main_right').height(height);
       $('.main_right').height();
        $('#main').height(height);
    };

    //微博发布按钮
    $('.weibo_button').button().click(function () {
        var img = [];
        var images = $('input[name="image"]');
        for (var i = 0; i < images.length; i++) {
            img[i] = images.eq(i).val();
        }

        if ($('.weibo_text').val().length === 0) {
            if (img.length === 0) {
                $('#error').dialog('open').html('请输入微博内容...');
                setTimeout(function () {
                    $('#error').dialog('close');
                    $('.weibo_text').focus();
                }, 1000)
            } else if (img.length !== 0) {
                $('.weibo_text').val('分享图片:');
                weibo_ajax_send(img);
            }
        } else {
            if (weibo_num()) {
                weibo_ajax_send(img);
            }
        }
    });




    //ajax提交微博信息
    function weibo_ajax_send(img) {
        $.ajax({
            url:ThinkPHP['MODULE']+'/topic/publish',
            type:'post',
            data:{
                content:$('.weibo_text').val(),
                img:img
            },
            beforeSend:function () {
                $('#loading').dialog('open');
            },
            success:function (responseText) {
                if(responseText){
                    $('#loading').dialog().html('微博发布成功!').addClass('succ').removeClass('loading');
                    setTimeout(function () {
                        $('#pic_box').hide();
                        $('.weibo_pic_content').remove();
                        $('input[name="image"]').remove();
                        pic_box.uploadTotal=0;
                        pic_box.uploadLimit=8;
                        $('.weibo_pic_total').text(pic_box.uploadTotal);
                        $('.weibo_pic_limit').text(pic_box.uploadLimit);
                        window.uploadCount.clear();
                        $('#loading').dialog('close')},1000);
                }
            }
        })
    }





    //error dialog
    $('#error').dialog({
        height:40,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false

    }).parent().find('.ui-dialog-titlebar').hide();


    //error dialog
    $('#loading').dialog({
        height:50,
        width:170,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false

    }).parent().find('.ui-dialog-titlebar').hide();

    //微博发表字数统计按钮抬起时统计
    $('.weibo_text').on('keyup',weibo_num );

    //统计字数,文本框获得光标时.
    $('.weibo_text').on('focus',function () {
        setTimeout(function () {
            weibo_num();
        },50)
    });


    //计算可输入字数的方法
    function weibo_num() {
        var total=280;
        var tem=0;
        var len=$('.weibo_text').val().length;
        if (len>0){
            for (var i=0;i<len;i++){
                if ($('.weibo_text').val().charCodeAt(i)>255){
                    tem+=2;
                }else{
                    tem++;
                }
            }
        }
        var value=parseInt((total-tem)/2-0.5);
        if(value>=0){
            $('.weibo_num').html('还可以输入<strong>'+value+'</strong>个字');
            return true;
        }else{
            $('.weibo_num').html('已经超出<strong class="red">'+-value+'</strong>字!');
            return false;
        }
    };










});


