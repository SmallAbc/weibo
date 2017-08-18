$(function () {
    var pic_box= {
        uplodify:function () {
            //文件上传测试
            $('#file').uploadify({
                swf:ThinkPHP['UPLOADIFY']+'/uploadify.swf',
                uploader:ThinkPHP['MODULE']+'/File/Upload',
                fileTypeDesc:'图片类型',
                buttonCursor:'hand',
                buttonText:'上传图片',
                fileTypeExts:'*.gif;*.png;*.jpg;*.jpeg',
                onUploadSuccess : function (file, data, response) {
                    $('.weibo_pic_list').append('<div class="weibo_pic_content"><span class="remove"></span><span class="text">删除</span><img src="' + data + '" class="weibo_pic_img"></div>');
                    setTimeout(function () {
                        pic_box.thumb();
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

            $(document).on('click', function (e) {
                var target = $(e.target);

                if (target.closest('#pic_btn').length == 1) {
                    return;
                }
                if (target.closest('#pic_box').length == 0) {
                    $('#pic_box').hide();
                }
            })
        }
    }


    pic_box.init();




})
