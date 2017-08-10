$(function () {
    //random Admin Login backround
    // var rand=Math.round(Math.random()*4+1);
    // $('body')
    //     .css('background','url('+ThinkPHP.IMG+'/login_bg'+rand+'.jpg)'+'no-repeat')
    //     .css('background-size','cover');

    //登录按钮
    $('#login').find('input[type="submit"]').button();

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
                $(this).submit();
            }
        }]
    }).validate({
        submitHandler:function (form) {
          $(form).ajaxSubmit({
              url: 'Home/User/register',
              type:'post',
              beforeSend:function () {
                  $('#loading').dialog('open');
              },
              success:function (responseText) {
                if(responseText){
                    $('#loading').dialog().css('background','url('+ThinkPHP['IMG']+'/success.gif) no-repeat 20px center').html('数据新增成功!');
                }
                setTimeout(function () {
                    $('#register').dialog('close');
                    $('#loading').dialog('close');
                    $('#register').resetForm();
                    $('#register span').html('*').removeClass('succ').addClass('star');
                    $('#loading').dialog().css('background','url('+ThinkPHP['IMG']+'/loading.gif) no-repeat 20px center').html('数据交互中...').addClass('loading');

                },1000)
              }
          });
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






});