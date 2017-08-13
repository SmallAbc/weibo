$(function () {
    //random Admin Login backround
    // var rand=Math.round(Math.random()*4+1);
    // $('body')
    //     .css('background','url('+ThinkPHP.IMG+'/login_bg'+rand+'.jpg)'+'no-repeat')
    //     .css('background-size','cover');

    //登录按钮(使用jqueryui的button替代原有样式)
    $('#login').find('input[type="submit"]').button();


    //登录验证
    $('#login').validate({
        submitHandler:function (form) {
            $('#verify_register').attr('form-click','login');
            $('#verify_register').dialog('open');

        },
        rules:{
            username:{
                required:true,
                minlength:2,
                maxlength:50

            },
            password:{
                required:true,
                minlength:6,
                maxlength:30

            }
        },
        messages:{
            username:{
                required:'必填',
                minlength:$.format('须小于{0}位'),
                maxlength:$.format('须大于{0}位')
            },
            password:{
                required:'必填',
                minlength:$.format('须大于{0}位'),
                maxlength:$.format('须小于{0}位')
            }
        }
    });

    // 创建注册对话框
    $('#register').dialog({
        width: 350,
        height: 330,
        title:'注册新用户',     //放在模板内的#register的title了
        modal: true,
        resizable: false,
        autoOpen: false,
        closeText: '关闭',
        buttons: [{
            text: '提交',
            click: function (e) {
                $(this).submit();     //这里是原始的提交按钮动作,是无用的,被下面的ajaxSubmit替代了
            }
        }]
    }).validate({
        submitHandler:function (form) {
        $('#verify_register').attr('form-click','register');
        $('#verify_register').dialog('open');
        },
        errorLabelContainer:'ol.reg_error',
        wrapper:'li',
        showErrors:function (errorMap,errorList) {
            this.defaultShowErrors();
            var errors=this.numberOfInvalids();
            if(errors>0){
                $('#register').dialog('option','height',errors*20+330);
            }else{
                $('#register').dialog('option','height',330);
            }
        },
        highlight:function (element,errorClass) {
            $(element).css('border','1px solid red');
            $(element).parent().find('span').html('*').removeClass('succ');
        },
        unhighlight:function (element,errorClass) {
            $(element).css('border','1px solid #ccc');
            $(element).parent().find('span').html('').addClass('succ');
        },
        rules:{
            username:{
                required:true,
                minlength:2,
                maxlength:20,
                isAt:true,
                remote:{
                    url:'home/User/checkUserName',
                    type:'post',
                    beforeSend:function () {
                        $('#username').next().html('').removeClass('star').addClass('loading');
                    },
                    complete:function (jqXHR) {
                        if(jqXHR.responseText==='true'){
                            $('#username').next().addClass('succ').removeClass('loading');
                        }else{
                            $('#username').next().addClass('star').removeClass('loading');
                        }
                    }
                }
            },
            password:{
                required:true,
                minlength:6,
                maxlength:20
            },
            repassword:{
                equalTo:'#password'  /*要相等的字段的id*/
            },
            email:{
                required:true,
                email:true,
                remote:{
                    url:'home/User/checkEmail',
                    type:'post',
                    beforeSend:function () {
                        $('#email').next().html('').removeClass('star').addClass('loading');
                    },
                    complete:function (jqXHR) {
                        if(jqXHR.responseText==='true'){
                            $('#email').next().addClass('succ').removeClass('loading');
                        }else{
                            $('#email').next().addClass('star').removeClass('loading');
                        }
                    }
                }
            }

        },
        messages:{
            username:{
                required:'用户名不得为空!',
                minlength:$.format('账号不得小于{0}位!'),
                maxlength:$.format('账号不得大于{0}位!'),
                isAt:'用户名不能包含@符号!',
                remote:'该账号已被占用!'
            },
            password:{
                required:'密码不得为空!',
                minlength:$.format('密码不得小于{0}位'),
                maxlength:$.format('密码不得大于{0}')
            },
            repassword:{
                equalTo:'两次密码必须一致!'
            },
            email:{
                required:'邮箱不得为空!',
                email:'邮箱格式不正确!',
                remote:'该邮箱已注册!'
            }

        }

    });


    //点击注册打开窗口
    $('#reg_link').click(function () {
        $('#register').dialog('open');
    });

    //邮箱补全功能  //Todo:研究一下邮箱自动补全功能
    $('#email').autocomplete({
        delay : 0,
        autoFocus : true,
        source : function (request, response) {
            //获取用户输入的内容
            //alert(request.term);
            //绑定数据源的
            //response(['aa', 'aaaa', 'aaaaaa', 'bb']);

            var hosts = ['qq.com', '163.com', '263.com', 'sina.com.cn','gmail.com', 'hotmail.com'],
                term = request.term,		//获取用户输入的内容
                name = term,				//邮箱的用户名
                host = '',					//邮箱的域名
                ix = term.indexOf('@'),		//@的位置
                result = [];				//最终呈现的邮箱列表


            result.push(term);

            //当有@的时候，重新分别用户名和域名
            if (ix > -1) {
                name = term.slice(0, ix);
                host = term.slice(ix + 1);
            }

            if (name) {
                //如果用户已经输入@和后面的域名，
                //那么就找到相关的域名提示，比如bnbbs@1，就提示bnbbs@163.com
                //如果用户还没有输入@或后面的域名，
                //那么就把所有的域名都提示出来

                var findedHosts = (host ? $.grep(hosts, function (value, index) {
                        return value.indexOf(host) > -1
                    }) : hosts),
                    findedResult = $.map(findedHosts, function (value, index) {
                        return name + '@' + value;
                    });

                result = result.concat(findedResult);
            }

            response(result);
        },
    });




    //loading
    $('#loading').dialog({
        width: 180 ,
        height: 40,
        modal: true,
        resizable: false,
        autoOpen: false,
        draggable:false,
        closeOnEscape:false,
    }).parent().find('.ui-dialog-titlebar').hide();


    //验证码弹窗
    $('#verify_register').dialog({
        width: 300,
        height: 300,
        title:'请输入验证码',     //放在模板内的#register的title了
        modal: true,
        resizable: false,
        autoOpen: false,
        closeText: '关闭',
        buttons: [{
            text: '完成',
            style:'right:80px',
            click: function (e) {
                $(this).submit();
            }
        }]
    }).validate({
        submitHandler:function (form) {
            if($('#verify_register').attr('form-click')==='register') {
                $('#register').ajaxSubmit({
                    url: 'Home/User/register',
                    type: 'post',
                    data: {
                        verify: $('#verify').val()
                    },
                    beforeSend: function () {
                        $('#loading').dialog('open');
                    },
                    success: function (responseText) {
                        if (responseText) {
                            $('#loading').dialog().css('background', 'url(' + ThinkPHP['IMG'] + '/success.gif) no-repeat 20px center').html('数据新增成功!');

                        } else {

                        }
                        setTimeout(function () {
                            $('#register').dialog('close');
                            $('#loading').dialog('close');
                            $('#verify_register').dialog('close');
                            $('#register').resetForm();
                            $('#register span').html('*').removeClass('succ').addClass('star');
                            $('#loading').dialog().css('background', 'url(' + ThinkPHP['IMG'] + '/loading.gif) no-repeat 20px center').html('数据交互中...').addClass('loading');

                        }, 1000)
                    }
                });
            }else if($('#verify_register').attr('form-click')==='login'){
                $("#login").ajaxSubmit({
                    url:'Home/User/login',
                    type:'post',
                    beforeSend:function () {
                        $('#loading').dialog('open')
                    },

                    success:function (responeText) {
                        if(responeText>0){
                            $('#loading').dialog('option','width',220).css('background','url('+ThinkPHP['IMG']+'/success.gif) no-repeat  15px center').html('登录成功,正在跳转...');//图片的左右15px,center和上下要分前后,否则不能成功
                            setTimeout(function () {
                                /* location.href='http://www.baidu.com';//火狐不能跳转到百度,谷歌可以*/
                            })
                        }else{
                            $('#loading').dialog('option','width',100).css('background','url('+ThinkPHP['IMG']+'/error.png) no-repeat  15px center').html('登录失败!');
                        }
                        setTimeout(function () {
                            $('#loading').dialog('option','width',200).css('background','url('+ThinkPHP['IMG']+'/loading.gif) no-repeat  10px center').html('数据交互中...!');
                            $('#loading').dialog('close');
                            $('#verify_register').resetForm();
                            $('#verify_register').dialog('close');
                        },2000);
                    }
                })
            }
        },
        errorLabelContainer:'ol.ver_error',
        wrapper:'li',
        showErrors:function (errorMap,errorList) {
            this.defaultShowErrors();
            var errors=this.numberOfInvalids();
            if(errors>0){
                $('#verify_register').dialog('option','height',errors*30+300);
            }else{
                $('#verify_register').dialog('option','height',300);
            }
        },
        highlight:function (element,errorClass) {
            $(element).css('border','1px solid red');
            $(element).parent().find('span').html('*').removeClass('succ');
        },
        unhighlight:function (element,errorClass) {
            $(element).css('border','1px solid #ccc');
            $(element).parent().find('span').html('').addClass('succ');
        },

        rules:{
            verify:{
                required:true,
                remote:{
                    url:'Home/User/checkVerify',
                    type:'post',
                    beforeSend:function () {
                        $('#verify').next().html('').removeClass('star').addClass('loading');
                    },
                    complete:function (jqXHR) {
                        if(jqXHR.responseText==='true'){
                            $('#verify').next().addClass('succ').removeClass('loading');
                        }else{
                            $('#verify').next().addClass('star').removeClass('loading');
                        }
                    }
                }
            }
        },
        messages:{
            verify:{
                required:'验证码不得为空!',
                remote:'验证码不正确!'
            }
        }
    });

    //自定义验证,不包含@的用户名
    $.validator.addMethod('isAt',function (value,element) {
        var text=/^[^@]+$/i;
        return this.optional(element) || (text.test(value));
    },'此字段不允许存在@符号!')

    //点击更新验证码
    var verifyimg=$('#verify_img').attr('src');
    $('.changeimg').click(function () {
        if(verifyimg.indexOf('?')>0) {
            $('#verify_img').attr('src', verifyimg + '&random=' + Math.random());
        }else{
            $('#verify_img').attr('src', verifyimg + '?random=' + Math.random());
        }
    })






});