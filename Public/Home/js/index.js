$(function () {
    $(window).load(function () {
        allHeight();
    })


    //微博整体高度协调
    function allHeight() {
        if ($('.main_left').height() > 800) {
            var height = $('.main_left').height();
            $('.main_right').height(height);
            $('.main_right').height();
            $('#main').height(height);
        }
    }

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
                    var html='';
                    switch (img.length){
                        case 0:
                            html= $('#ajax_html').html();
                            break;
                        case 1:
                            html= $('#ajax_html1').html();
                            var imgurl=$.parseJSON(img);
                            break;
                        default:
                            var htmls=[];
                            html= $('#ajax_html2').html();
                            var imghtml= $('#ajax_img').html();
                            for(var i=0;i<img.length;i++){
                                var imgsurl=$.parseJSON(img[i]);
                                htmls[i]=imghtml.replace(/#缩略图#/g,imgsurl['thumb']);
                                htmls[i]=htmls[i].replace(/#原图#/g,imgsurl['source']);
                                htmls[i]=htmls[i].replace(/#放大图#/g,imgsurl['unfold']);
                            }
                            var jhtml=htmls.join('');
                            html=html.replace(/#图片#/g,jhtml);
                            break;
                    }
                    if(html.indexOf('#内容#')>0){
                        //解析表情
                        var text=$('.weibo_text').val();
                        text=text.replace(/\[(a|b|c|d)([0-9]+)\]/g,'<img src="'+ThinkPHP['FACE']+'/$1/$2.gif">');
                        //插入内容
                        html=html.replace(/#内容#/g,text);

                    }
                    if(html.indexOf('#缩略图#')>0){
                        html=html.replace(/#缩略图#/g,imgurl['thumb']);
                        html=html.replace(/#原图#/g,imgurl['source']);
                        html=html.replace(/#放大图#/g,imgurl['unfold']);
                    }
                    $('.weibo_content ul').after(html);
                    setTimeout(function () {
                        $('#pic_box').hide();
                        $('.weibo_pic_content').remove();
                        $('input[name="image"]').remove();
                        pic_box.uploadTotal=0;
                        pic_box.uploadLimit=8;
                        $('.weibo_pic_total').text(pic_box.uploadTotal);
                        $('.weibo_pic_limit').text(pic_box.uploadLimit);
                        window.uploadCount.clear();
                        $('#loading').dialog('close');
                        allHeight();
                        setUrl();
                    },1000);

                }
            }
        })
    }
    //发布成功时的局部刷新


    //单图:点击图片放大 放到下面的动态绑定了
    // var imgdiv=$('.weibo_content_data .img');
    // var len=imgdiv.length;
    // for(var i=0;i<len;i++){
    //     $(imgdiv[i]).on('click',function () {
    //         $(this).hide();
    //         $(this).next().show();
    //         var img=$(this).next().find('img');
    //         img.attr('src',img.attr('data'));
    //     })
    // }
    //动态绑定,实现新增的节点也能点击放大
    $('.weibo_content').on('click','.img img',function () {
        $(this).parent().hide();
        $(this).parent().next().show();
        var img=$(this).parent().next().find('img');
        img.attr('src',img.attr('data'));
        allHeight();
    })


    //单图:点击收起按钮,关闭放大图,已和多图合并

    // $('.weibo_content_data').on('click','.in',function () {
    //     $(this).parent().parent().hide();
    //     $(this).parent().parent().prev().show();
    // })




    //多图:点击多图的图片放大图片

    $('.weibo_content' ).on('click','.imgs img',function () {
        $(this).parent().hide();
        $(this).parent().siblings('.imgs').hide();
        $(this).parent().next().show();
        var img=$(this).parent().next().find('img');
        img.attr('src',img.attr('data'));
        allHeight();
    })

    //多图,单图:点击收起按钮,关闭放大图

    $('.weibo_content ').on('click','.in',function () {
        $(this).parent().parent().hide();
        //多图
        $(this).parent().parent().parent().find('.imgs').show();
        //单图
        $(this).parent().parent().parent().find('.img').show();
        allHeight();
    })

    //TODO:做一个像新浪微博的,显示中图时,左右切换的箭头


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


    //动态获取微博总条数
    $.ajax({
        url: ThinkPHP['MODULE'] + '/Topic/ajaxcount',
        type: 'post',
        data: {},
        success: function (data, responseText, resopnMsg) {
            window.count=data;
        }
    });



    //滚动条拖动到底部自动静态更新画面
    window.currentPage=2;
    $(window).scroll(function () {
        //滚动条顶端到窗口顶端的距离,也就是滚动条已经划过的距离
        var scrollTop = $(this).scrollTop();
        //全屏的高度,即滚动条从上到下拉一遍所看到的总高度
        var scrollHeight = $(document).height();
        //滚动条一条所占的位置高度,也就是一屏的高度
        var windowHeight = $(this).height();
        var totalPage=window.count;
        if(currentPage<=totalPage){
            //相等,说明已滑到低端
            if((scrollTop+windowHeight)==scrollHeight){
                setTimeout(function () {
                    $.ajax({
                        url: ThinkPHP['MODULE'] + '/Topic/ajaxList',
                        type: 'post',
                        data: {
                            count:10*(currentPage-1)
                        },
                        success: function (data, responseText, resopnMsg) {
                            $('#loadmore').before(data);
                            currentPage++;
                            allHeight();
                            setUrl();
                        }
                    });
                },1000)
            }

        }
        allHeight();
    })



    //返回顶部按钮
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '返回顶部', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    setUrl();

    //微博@博客名 添加链接
    function setUrl() {
        space=$('.space');
        var len=$('.space').length;
        for (var i=0;i<len;i++){
            if($('.space').eq(i).attr('flag')!=='true'){
                $.ajax({
                    url:ThinkPHP['MODULE']+'/Space/setUrl',
                    type:'post',
                    //将异步调用关闭才能在success内给全局变量space赋值
                    async:false,
                    data:{
                        name:space[i].innerHTML.substr(1),
                    },
                    success:function (data) {
                        alert(data);
                        if(data!=0){
                            $('.space').eq(i).attr('href',data);
                            $('.space').eq(i).attr('flag','true');
                        }else {
                            $('.space').eq(i).after(space[i].innerHTML);
                            $('.space').eq(i).hide().attr('flag', 'true');
                        }
                    }
                })
            }


        }
    }


});
