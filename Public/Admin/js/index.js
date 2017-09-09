$(function () {

$('#nav').tree({
    url:ThinkPHP['MODULE']+'/Index/getNav',
    line:true,
    onLoadSuccess:function (node,data) {
        //为了不与内部的this冲突,将外面的this赋值给_this;
        var _this=this;
        //这里的代码是为了加载之后就将tree展开
        if (data){
            $(data).each(function () {
                if (this.state==='closed'){
                    $(_this).tree('expandAll');
                }
            })
        }
    }
})

});