/*
*	评论表情渲染JS
*	@author:	小毛
*	@data:		2013年2月17日
*	@version:	1.0
*	@rely:		jQuery
*/
$(function(){
	/*
	*		参数说明
	*		baseUrl:	【字符串】表情路径的基地址
	*		pace:		【数字】表情弹出层淡入淡出的速度
	*		dir:		【数组】保存表情包文件夹名字
	*		text:		【二维数组】保存表情包title文字
	*		num:		【数组】保存表情包表情个数
	*		isExist:	【数组】保存表情是否加载过,对于加载过的表情包不重复请求。
	*/
	var rl_exp = {
		baseUrl:	'',
		pace:		200,
		dir:		['d','b','c','a'],
		text:[			/*表情包title文字，自己补充*/
			[
				'a0','a1','a2','a3','a4','a5','a6','a7','a8','a9','a10','a11','a12','a13','a14','a15','a16','a17','a18','a19',
				'a20','a21','a22','a23','a24','a25','a26','a27','a28','a29','a30','a31','a32','a33','a34','a35','a36','a37','a38','a39',
				'a40','a41','a42','a43','a44','a45','a46','a47','a48','a49','a50','a51','a52','a53','a54','a55','a56','a57','a58','a59',
				'a60','a61','a62','a63','a64','a65','a66','a67','a68','a69','a70','a71','a72','a73','a74','a75','a76','a77','a78','a79',
				'a80','a81','a82','a83','a84','a85','a86','a87','a88','a89','a90','a91','a92','a93','a94','a95'
			],
			[
				'b0','b1','b2','b3','b4','b5','b6','b7','b8','b9','b10','b11','b12','b13','b14','b15','b16','b17','b18','b19',
				'b20','b21','b22','b23','b24','b25','b26','b27','b28','b29','b30','b31','b32','b33','b34','b35','b36','b37','b38','b39',
				'b40','b41','b42','b43','b44','b45','b46','b47','b48','b49','b50','b51','b52','b53','b54','b55','b56','b57','b58','b59',
				'b60','b61','b62','b63','b64','b65','b66','b67','b68','b69','b70','b71','b72','b73','b74','b75','b76','b77','b78','b79',
				'b80','b81','b82','b83','b84','b85','b86','b87','b88','b89','b90','b91','b92','b93','b94','b95'
			],
			[
				'c0','c1','c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14','c15','c16','c17','c18','c19',
				'c20','c21','c22','c23','c24','c25','c26','c27','c28','c29','c30','c31','c32','c33','c34','c35','c36','c37','c38','c39',
				'c40','c41','c42','c43','c44','c45','c46','c47','c48','c49','c50','c51','c52','c53','c54','c55','c56','c57','c58','c59',
				'c60','c61','c62','c63','c64','c65','c66','c67','c68','c69','c70','c71','c72','c73','c74','c75','c76','c77','c78','c79',
				'c80','c81','c82','c83','c84','c85','c86','c87','c88','c89','c90','c91','c92','c93','c94','c95'
			],
			[
				'd0','d1','d2','d3','d4','d5','d6','d7','d8','d9','d10','d11','d12','d13','d14','d15','d16','d17','d18','d19',
				'd20','d21','d22','d23','d24','d25','d26','d27','d28','d29','d30','d31','d32','d33','d34','d35','d36','d37','d38','d39',
				'd40','d41','d42','d43','d44','d45','d46','d47','d48','d49','d50','d51','d52','d53','d54','d55','d56','d57','d58','d59',
				'd60','d61','d62','d63','d64','d65','d66','d67','d68','d69','d70','d71','d72','d73','d74','d75','d76','d77','d78','d79',
				'd80','d81','d82','d83','d84','d85','d86','d87','d88','d89','d90','d91','d92','d93','d94','d95'
			],
		],
		num:		[84,46,82,69],
		isExist:	[0,0,0,0],
		bind:	function(i){
			$("#rl_bq .rl_exp_main").eq(i).find('.rl_exp_item').each(function(){
				$(this).bind('click',function(){
					rl_exp.insertText(document.getElementById('rl_exp_input'),'['+$(this).find('img').attr('title')+']');
					$('#rl_bq').hide();
				});
			});
		},
		/*加载表情包函数*/
		loadImg:function(i){
			var node = $("#rl_bq .rl_exp_main").eq(i);
			for(var j = 0; j<rl_exp.num[i];j++){
				var domStr = 	'<li class="rl_exp_item">' + 
									'<img src="' + rl_exp.baseUrl + ThinkPHP['FACE']+'/' + rl_exp.dir[i] + '/' + j + '.gif" alt="' + rl_exp.text[i][j] +
									'" title="' + rl_exp.text[i][j] + '" />' +
								'</li>';
				$(domStr).appendTo(node);
			}
			rl_exp.isExist[i] = 1;
			rl_exp.bind(i);
		},
		/*在textarea里光标后面插入文字*/
		insertText:function(obj,str){
			obj.focus();
			if (document.selection) {
				var sel = document.selection.createRange();
				sel.text = str;
			} else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
				var startPos = obj.selectionStart,
					endPos = obj.selectionEnd,
					cursorPos = startPos,
					tmpStr = obj.value;
				obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
				cursorPos += str.length;
				obj.selectionStart = obj.selectionEnd = cursorPos;
			} else {
				obj.value += str;
			}
		},
		init:function(){
			$("#rl_bq > ul.rl_exp_tab > li > a").each(function(i){
				$(this).bind('click',function(){
					if( $(this).hasClass('selected') )
						return;
					if( rl_exp.isExist[i] == 0 ){
						rl_exp.loadImg(i);
					}
					$("#rl_bq > ul.rl_exp_tab > li > a.selected").removeClass('selected');
					$(this).addClass('selected');
					$('#rl_bq .rl_selected').removeClass('rl_selected').hide();
					$('#rl_bq .rl_exp_main').eq(i).addClass('rl_selected').show();
				});
			});
			/*绑定表情弹出按钮响应，初始化弹出默认表情。*/
			$("#rl_exp_btn").bind('click',function(){
				if( rl_exp.isExist[0] == 0 ){
					rl_exp.loadImg(0);
				}
				var w = $(this).position();
				$('#rl_bq').css({left:w.left,top:w.top+30}).show();
			});
			/*绑定关闭按钮*/
			$('#rl_bq a.close').bind('click',function(){
				$('#rl_bq').hide();
			});
			/*绑定document点击事件，对target不在rl_bq弹出框上时执行rl_bq淡出，并阻止target在弹出按钮的响应。*/
			$(document).bind('click',function(e){
				var target = $(e.target);
				if( target.closest("#rl_exp_btn").length == 1 )
					return;
				if( target.closest("#rl_bq").length == 0 ){
					$('#rl_bq').hide();
				}
			});
		}
	};
	rl_exp.init();	//调用初始化函数。
});