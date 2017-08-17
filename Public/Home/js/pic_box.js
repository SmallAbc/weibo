$(function () {
    var pic_box= {
        uplodify:function () {
            //文件上传测试
            $('#file').uploadify({
                swf:ThinkPHP['UPLOADIFY']+'/uploadify.swf',
                uploader:ThinkPHP['MODULE']+'/File/upload',
                fileTypeDesc:'图片类型',
                buttonCursor:'hand',
                buttonText:'上传图片',
                fileTypeExts:'*.gif;*.png;*.jpg;*.jpeg',
                onUploadSuccess:function (file,data,response) {
                    alert(response);
                }
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
