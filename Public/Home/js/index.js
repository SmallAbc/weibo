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
        alert(height);
        $('.main_right').height(height);
        alert($('.main_right').height());
        $('#main').height(height);
    };

    //微博发布按钮
    $('.weibo_button').button().click(function () {
        if($('.weibo_text').val().length==0){
            $('#error').dialog('open').html('请输入微博内容...');
            setTimeout(function(){
                $('#error').dialog('close');
                $('.weibo_text').focus();
            },1000)
        }else if(weibo_num()){
            alert('submit');
        }

    });


    $('#error').dialog({
        height:40,
        width:200,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false

    }).parent().find('.ui-dialog-titlebar').hide();



    //微博发表字数统计
    $('.weibo_text').on('keyup',weibo_num );



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
        var value=parseInt((total-tem)/2);
        if(value>=0){
            $('.weibo_num').html('还可以输入<strong>'+value+'</strong>个字');
            return true;
        }else{
            $('.weibo_num').html('已经超出<strong class="red">'+-value+'</strong>字!');
            return false;
        }
    };










});


