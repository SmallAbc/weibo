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
              type:'post'

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
            $(element).parent().find('span').html('√').addClass('succ');
        },
        rules:{
            username:{
                required:true,
                minlength:2,
                maxlength:20
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
                email:true
            }

        },
        messages:{
            username:{
                required:'用户名不得为空!',
                minlength:$.format('账号不得小于{0}位!'),
                maxlength:$.format('账号不得大于{0}位!')
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
                email:'邮箱格式不正确!'
            }

        }





    });




    //点击注册打开窗口
    $('#reg_link').click(function () {
        $('#register').dialog('open');
    });
});