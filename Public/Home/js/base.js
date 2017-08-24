$(function () {

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

    //error dialog
    $('#error').dialog({
        height:40,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false

    }).parent().find('.ui-dialog-titlebar').hide();

    //loading dialog
    $('#loading').dialog({
        height:50,
        width:170,
        autoOpen:false,
        modal:true,
        draggable:false,
        resizable:false,
        closeOnEscape:false

    }).parent().find('.ui-dialog-titlebar').hide();
});