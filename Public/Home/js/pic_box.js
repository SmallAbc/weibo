$(function () {
    var pic_box= {
        uploadTotal:0,
        uploadLimit:8,
        uplodify:function () {
            //文件上传测试
            $('#file').uploadify({
                swf:ThinkPHP['UPLOADIFY']+'/uploadify.swf',
                uploader:ThinkPHP['MODULE']+'/File/Upload',
                fileTypeDesc:'图片类型',
                buttonCursor:'hand',
                buttonText:'上传图片',
                fileSizeLimit:'1MB',
                fileTypeExts:'*.gif;*.png;*.jpg;*.jpeg',
                overrideEvents:['onSelectError','onSelect','onDialogClose'],
                onSelectError:function (file,errorCode,errorMsg) {
                  switch (errorCode){
                      case -110:
                          $('#error').dialog('open').html('部分上传图片超过1024KB!');
                          setTimeout(function () {
                              $('#error').dialog('close').html('...');
                          },2000);
                      break;
                  }
                },
                onUploadStart:function () {
                    if (pic_box.uploadTotal>=7){
                        $('#file').uplodify('stop');
                        $('#file').uplodify('cancel');

                    }else{
                        $('.weibo_pic_list').append('<div class="weibo_pic_content"><span class="remove"></span><span class="text">删除</span><img src="' + ThinkPHP['IMG'] + '/loading_100.png" class="weibo_pic_img"></div>');
                    }
                },
                onUploadSuccess : function (file, data, response) {
                    $('.weibo_pic_list').append('<input type="hidden" name="image" value='+data+'>');
                    var path=$.parseJSON(data);
                    var img = $('.weibo_pic_img');
                    var len = img.length;
                    $(img[len-1]).attr('src',ThinkPHP['ROOT']+path['thumb']);
                    setTimeout(function () {
                        pic_box.thumb();
                        pic_box.hover();
                        pic_box.remove();
                        pic_box.uploadTotal++;
                        pic_box.uploadLimit--;
                        $('.weibo_pic_total').html(pic_box.uploadTotal);
                        $('.weibo_pic_limit').html(pic_box.uploadLimit);
                    }, 50);

                }
            });
        },

        //为了能让缩略图能够更好地显示,显示更主要,中间的内容
        thumb : function () {
            var img = $('.weibo_pic_img');
            var len = img.length;
            if ($(img[len - 1]).width() > 100) {
                $(img[len - 1]).css('left', -($(img[len - 1]).width() - 100) / 2);
            }
            if ($(img[len - 1]).height() > 100) {
                $(img[len - 1]).css('top', -($(img[len - 1]).height() - 100) / 2);
            }
        },

        //鼠标置于图片上出现删除按钮 TODO:批量上传的时候发现第一张和第六章图片没有把删除按钮显示出来
        hover:function () {
            var content=$('.weibo_pic_content');
            var len=content.length;
              $(content[len-1]).on({
                    'mouseenter':function () {
                        $(this).find('.text').show();
                        $(this).find('.remove').show();
                        },
                    'mouseleave':function () {
                        $(this).find('.text').hide();
                        $(this).find('.remove').hide();
                        },
                });
        },

        //删除添加了,但后悔不想要的图片
        remove : function () {
            var remove = $('.weibo_pic_content .text');
            var len = remove.length;
            $(remove[len - 1]).on('click', function () {
                $(this).parent().next('input[name="image"]').remove();
                   $(this).parent().remove();
                pic_box.uploadTotal--;
                pic_box.uploadLimit++;
                $('.weibo_pic_total').text(pic_box.uploadTotal);
                $('.weibo_pic_limit').text(pic_box.uploadLimit);
            });
        },

        /*绑定图片框弹出按钮响应，初始化。*/
        init:function() {
            $("#pic_btn").on('click', function () {
                var w = $(this).position();
                $('#pic_box').css({left: w.left + 10, top: w.top + 30}).show();
                pic_box.uplodify();
            });

            $('.close').on('click', function () {
                $('#pic_box').hide();
            })

            // $(document).on('click', function (e) {
            //     var target = $(e.target);
            //
            //     if (target.closest('#pic_btn').length == 1||target.closest('.weibo_pic_content .text').length==1) {
            //         return;
            //     }
            //     if (target.closest('#pic_box').length == 0) {
            //         $('#pic_box').hide();
            //     }
            // })
        }
    }

    pic_box.init();
    window.uploadCount={
        clear:function(){
            pic_box.uploadTotal=0;
            pic_box.uploadLimit=8;
        }
    }



})
