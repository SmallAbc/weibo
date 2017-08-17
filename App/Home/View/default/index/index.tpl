<extend name="base/common" />

<block name="main">
        <div class="main_left" >
                <form class="weibo_form" action="" >
                        <span class="left">和大家一起分享一些新鲜事吧!</span>
                        <span class="right weibo_num">可以输入<strong>140</strong>个字</strong></span>
                        <textarea name="" class="weibo_text" id="rl_exp_input" cols="30" rows="10"></textarea>
                        <a href="javascript:void(0);" class="weibo_face" id="rl_exp_btn">表情</a>
                        <div class="rl_exp" id="rl_bq" style="display:none;">
                                <ul class="rl_exp_tab clearfix">
                                        <li><a href="javascript:void(0);" class="selected">默认</a></li>
                                        <li><a href="javascript:void(0);">拜年</a></li>
                                        <li><a href="javascript:void(0);">浪小花</a></li>
                                        <li><a href="javascript:void(0);">暴走漫画</a></li>
                                </ul>
                                <ul class="rl_exp_main clearfix rl_selected"></ul>
                                <ul class="rl_exp_main clearfix" style="display:none;"></ul>
                                <ul class="rl_exp_main clearfix" style="display:none;"></ul>
                                <ul class="rl_exp_main clearfix" style="display:none;"></ul>
                                <a href="javascript:void(0);" class="close">×</a>
                        </div>
                        <a href="javascript:void(0);" class="weibo_pic" id="pic_btn">图片</a>
                        <div class="weibo_pic_box" id="pic_box" style="display:none;">
                            <a href="javascript:void(0);" class="close">×</a>
                            <p>共0张,还可以选择4张</p>
                            <input type="file" class="file" id="file">
                        </div>
                        <input type="button" class="weibo_button" value="发布">
                </form>
        </div>
        <div class="main_right">
                right
        </div>

        <div id="error">...</div>
        <div id="loading" class="loading">数据交互中...</div>
</block>