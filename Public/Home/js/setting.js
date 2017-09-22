$(function(){
    // Create variables (in this scope) to hold the API and image size
    var jcrop_api,
        boundx,
        boundy,

        // Grab some information about the preview pane
        $preview = $('#preview-pane'),
        $pcnt = $('#preview-pane .preview-container'),
        $pimg = $('#preview-pane .preview-container img'),

        xsize = $pcnt.width(),
        ysize = $pcnt.height();



    function updatePreview(c){
        $('#x').val(c.x);
        $('#y').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
        if (parseInt(c.w) > 0) {
            var rx = xsize / c.w;
            var ry = ysize / c.h;

            $pimg.css({
                width: Math.round(rx * boundx) + 'px',
                height: Math.round(ry * boundy) + 'px',
                marginLeft: '-' + Math.round(rx * c.x) + 'px',
                marginTop: '-' + Math.round(ry * c.y) + 'px'
            });
        }
    };


    // Simple event handler, called from onChange and onSelect
// event handlers, as per the Jcrop invocation above
    function showCoords(c){

    };
    //更改为图片上传成功后再能剪切
    // console.log('init',[xsize,ysize]);
    // $('#avatar').Jcrop({
    //     onChange: updatePreview,
    //     onSelect: updatePreview,
    //     // allowSelect:true,	//允许新选框
    //     // allowMove: false,	//允许选框移动
    //     // allowResize: true,	//允许选框缩放
    //     // trackDocument: true,	//拖动选框时，允许超出图像以外的地方时继续拖动。
    //     // baseClass: 'jcrop',	//	基础样式名前缀。说明：class="jcrop-holder"，更改的只是其中的 jcrop。
    //                            // 例：假设值为 "test"，那么样式名会更改为 "test-holder"
    //     // addClass: 'layout',	//	添加样式。// //例：假设值为 "test",	//那么会添加样式到class="jcrop-holder test"(想添加layout这个表的样式,没有添加成功,只能手动添加到jquery.jcrop.css中)
    //     // bgColor: 'black',	//	背景颜色。颜色关键字、HEX、RGB 均可。
    //     // bgOpacity: 0.6,	//	背景透明度
    //     bgFade: true,	//	使用背景过渡效果
    //     // borderOpacity: 0.4,	//	选框边框透明度
    //     // handleOpacity: 0.5,	//	缩放按钮透明度
    //     // handleSize: null,	//	缩放按钮大小
    //     aspectRatio: 1,	//	选框宽高比。说明：width/height
    //     // keySupport: true,	//	支持键盘控制。按键列表：上下左右（移动选框）、Esc（取消选框）
    //     // // createHandles:	['n','s','e','w','nw','ne','se','sw'],	//	设置边角控制器
    //     // createDragbars:	['n','s','e','w'],	//	设置边框控制器
    //     // createBorders:	['n','s','e','w'],	//	设置边框
    //     // drawBorders:	true,	//	绘制边框
    //     // dragEdges:	true,	//	允许拖动边框
    //     // fixedSupport:	trueExpecting newline or semicolon, 	//支持 fixed，例如：IE6、iOS4
    //     // touchSupport:	nullExpecting newline or semicolon, 	//	支持触摸事件
    //     // shade:	nullExpecting newline or semicolon, 	//	使用更好的遮罩
    //     // boxWidth:	0Expecting newline or semicolon, 	//	画布宽度
    //     // boxHeight:	0Expecting newline or semicolon,          //	画布高度
    //     // boundary:	2Expecting newline or semicolon,          //	边界。说明：可以从边界开始拖动鼠标选择裁剪区域
    //     // fadeTime:	400Expecting newline or semicolon,          //	过度效果的时间
    //     // animationDelay:	20Expecting newline or semicolon,          //	动画延迟
    //     // swingSpeed:	3Expecting newline or semicolon,          //	过渡速度
    //     minSelect:	[80, 80]//Expecting newline or semicolon,          //	选框最小选择尺寸。说明：若选框小于该尺寸，则自动取消选择
    //     // maxSize:	[0, 0]Expecting newline or semicolon,          //	选框最大尺寸
    //     // minSize:	[0, 0]Expecting newline or semicolon,          //	选框最小尺寸
    //     // onChange	function() {}	选框改变时的事件
    //     // onSelect	function() {}	选框选定时的事件
    //     // onDblClick	function() {}	在选框内双击时的事件
    //     // onRelease	function() {}	取消选框时的事件
    //
    // },
    //     function(){
    //         // Use the API to get the real image size
    //         var bounds = this.getBounds();
    //         boundx = bounds[0];
    //         boundy = bounds[1];
    //         // Store the API in the jcrop_api variable
    //         jcrop_api = this;
    //
    //         // Move the preview into the jcrop container for css positioning
    //         $preview.appendTo(jcrop_api.ui.holder);
    //     });



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
    if($('#file').length>0){
        $('#file').uploadify({
            swf:ThinkPHP['UPLOADIFY']+'/uploadify.swf',
            uploader:ThinkPHP['MODULE']+'/File/face',
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
                $('#loading').dialog('open').addClass('loading').html('图片上传中!');
            },
            onUploadSuccess : function (file, data, response) {
                var path=$.parseJSON(data);
                $('.jcrop-holder > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)').attr('src',ThinkPHP['ROOT']+path);
                $('.jcrop-holder > img:nth-child(4)').attr('src',ThinkPHP['ROOT']+path);
                $('#imgurl').val(path);
                $('#file').hide();
                $('#save').button().show();
                $('#cancel').button().show();

                //Todo:取消后的图片尺寸有问题还需要改
                // $('#target').one('load',function () {
                $('#target').attr('src',ThinkPHP['ROOT']+path).Jcrop({
                        onChange: updatePreview,
                        onSelect: updatePreview,
                        bgFade: true,	//	使用背景过渡效果
                        aspectRatio: 1,	//	选框宽高比。说明：width/height
                        minSelect:	[50, 50],//Expecting newline or semicolon,          //	选框最小选择尺寸。说明：若选框小于该尺寸，则自
                        setSelect:[0,0,200,200]
                    },
                    function () {
                        // Use the API to get the real image size
                        var bounds = this.getBounds();
                        boundx = bounds[0];
                        boundy = bounds[1];
                        // Store the API in the jcrop_api variable
                        jcrop_api = this;

                        // Move the preview into the jcrop container for css positioning
                        $preview.appendTo(jcrop_api.ui.holder);
                        //添加了模块之后再给src赋值,否则显示的还是上一次上传的图片
                        $('.jcrop-preview').attr('src',ThinkPHP['ROOT']+path);
                        $('#preview-pane').show();
                    });
                // })
                setTimeout(function () {
                    $('#loading').dialog('close');
                }, 50);

            }
        });

    }


    //图像剪切取消按钮
    $('#cancel').button().click(function () {
        //销毁jcrop
        jcrop_api.destroy();
        //清除图片框的格式,让他回归200X200
        $('#target').removeAttr('style');
        if(ThinkPHP['BIG'].length>0){
            $('#target ,#crop').attr('src',ThinkPHP['ROOT']+ThinkPHP['BIG']);
        }else{
            $('#target ,#crop').attr('src',ThinkPHP['IMG']+'/big.jpg');
        }
        $('.jcrop-holder,.jcrop-tracker').hide();
        $('#preview-pane').hide();
        $('#file').show();
        $('#save').button().hide();
        $('#cancel').button().hide();
    })


    //图像剪切保存按钮
    $('#save').button().click(function () {
        $.ajax({
            url:ThinkPHP['MODULE']+'/File/crop',
            type:'post',
            data:{
                x:$('#x').val(),
                y:$('#y').val(),
                w:$('#w').val(),
                h:$('#h').val(),
                imgurl:$('#imgurl').val()
            },
            beforeSend:function () {
                $('#loading').dialog('open').addClass('load').html('头像保存中!!');
            },
            success:function (data,responeText,msg) {
                $('#loading').dialog('close').removeClass('load').html('');
               var path=$.parseJSON(data);
                //销毁jcrop
                jcrop_api.destroy();
                //清除图片框的格式,让他回归200X200
                $('#target').removeAttr('style');
                $('#target').attr('src',ThinkPHP['ROOT']+path['big']+'?'+Math.random());  //由于缓存的问题,第二次提交剪切图时不会立即刷新,所以需要加一个随机数
                $('.jcrop-holder,.jcrop-tracker').hide();
                $('#preview-pane').hide();
                $('#file').show();
                $('#save').button().hide();
                $('#cancel').button().hide();

                $.ajax({
                    //相当于重新加载一次reload,以便session写入
                    url:ThinkPHP['MODULE']+'/Setting/avatar'
                })
            }
        })
    })




    //域名注册页面呢,域名注册按钮
    $('.domainbutton').on('click',function () {
        $.ajax({
            url:ThinkPHP['MODULE']+'/Setting/setdomain',
            type:'post',
            data:{
                domain:$('input[name="domain"]').val(),
            },
            beforeSend:function () {
                $('#loading').dialog('open').html('正在注册域名!').addClass('loading');
            },
            success:function (data,responText,msg) {
                if (responText === 'success') {
                    $('#loading').dialog().html('注册成功!').removeClass('loading').addClass('succ');
                    setTimeout(function () {
                        location.reload();
                        $('#loading').dialog('close').html('').removeClass('succ');
                    }, 2000)
                }
            }
        })

    })


    //@提及页面未读按钮
    $('.read').on('click',function () {
       flag=$(this).attr('flag');
       id=$(this).attr('atid');
        $.ajax({
                url:ThinkPHP['MODULE']+'/Setting/setRead',
                type:'post',
            data:{
                flag:flag,
                id:id
            },
            beforeSend:function () {
                
            },
            success:function () {
                location.reload();
            }

            })
    })

    $('#add-button').on('click',function () {
        $('#approve').dialog('open');
    })

    $('#approve').dialog({
        title:'添加认证',
        autoOpen:false,
        modal:true,
        buttons:[
            {
                text:'提交',
                click:function (e) {
                $.ajax({
                    url:ThinkPHP['MODULE']+'/Setting/sendApplication',
                    type:'post',
                    data:{
                        id:$('input[name="uid"]').val(),
                        name:$('input[name="name"]').val(),
                        info:$('textarea[name="info"]').val(),
                    },
                    beforeSend:function () {
                        $('#loading').dialog('open').html('数据提交中...').addClass('loading')
                    },
                    success:function (data,responText) {
                        if(data>0){
                            $('#loading').dialog().html('申请已提交!').removeClass('loading').addClass('succ');
                            setTimeout(function () {
                                $('#loading').dialog('close').html('...');
                            })
                        }else{
                            $('#loading').dialog('close').html('...');
                            $('#error').html('数据错误:'+data).dialog('open');
                            setTimeout(function () {
                                $('#error').dialog('close');
                            },3000)
                        }

                    }
                    
                })
                }
            }
        ]
    })

});