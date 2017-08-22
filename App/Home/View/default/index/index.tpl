<extend name="base/common" />

<block name="main">
    <div class="main_left">
        <div class="weibo_form">
            <span class="left">和大家分享一点新鲜事吧？</span>
            <span class="right weibo_num">可以输入<strong>140</strong>个字</span>
            <textarea class="weibo_text" id="rl_exp_input"></textarea>
            <a href="javascript:void(0);" class="weibo_face" id="rl_exp_btn">表情<span class="face_arrow_top"></span></a>
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
            <a href="javascript:void(0);" class="weibo_pic" id="pic_btn">图片<span class="pic_arrow_top"></span></a>
            <div class="weibo_pic_box" id="pic_box" style="display:none;">
                <div class="weibo_pic_header">
                    <span class="weibo_pic_info">共 <span class="weibo_pic_total">0</span> 张，还能上传 <span class="weibo_pic_limit">8</span> 张（按住ctrl可选择多张）</span>
                    <a href="javascript:void(0);" class="close">×</a>
                </div>
                <div class="weibo_pic_list"></div>
                <input type="file" name="file" id="file">
            </div>
            <input class="weibo_button" type="button" value="发布">
        </div>
        <div class="weibo_content" style="clear:both;">
            <ul>
                <li ><a href="javascript:void(0);" class="selected">我关注的<i class="nav_arrow"></i></a></li>
                <li><a href="javascript:void(0);">互听的</a></li>
            </ul>
            <!--无配图的局部刷新-->
            <div id="ajax_html" style="display: none;">
                <dl class="weibo_content_data">
                    <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                    <dd>
                        <h4><a href="javascript:void(0);">{$Think.session.user_auth.username}</a></h4>
                        <p>#内容#</p>
                        <div class="footer">
                            <span class="time">刚刚发布</span>
                            <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <!--一张配图的局部刷新-->
            <div id="ajax_html1" style="display: none;">
                <dl class="weibo_content_data" >
                    <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                    <dd>
                        <h4><a href="javascript:void(0);">{$Think.session.user_auth.username}</a></h4>
                        <p>#内容#</p>
                        <div class="img" style="display: block;"><img src="__ROOT__#缩略图#" alt=""></div>
                        <div class="img_zoom" style="display: none;">
                            <ol>
                                <li class="in"><a href="javascript:void(0);">收起</a></li>
                                <li class="source"><a href="__ROOT__#原图#" target="_blank">查看原图</a></li>
                            </ol>
                            <img data="__ROOT__#放大图#" src="__IMG__/loading_100.png" alt="">
                        </div>
                        <div class="footer">
                            <span class="time">刚刚发布</span>
                            <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl>
            </div>
            <!--多张配图的局部刷新-->
            <volist name="topiclist" id="obj">
                <dl class="weibo_content_data">
                    <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                    <dd>
                        <h4><a href="javascript:void(0);">{$obj.username}</a></h4>
                        <p>{$obj.content}{$obj.content_over}</p>
                        <switch name="obj.count">
                            <case value="0"></case>
                            <case value="1">
                                <div class="img" style="display: block;"><img src="__ROOT__{$obj.image.0.thumb}" alt=""></div>
                                <div class="img_zoom" style="display: none;">
                                    <ol>
                                        <li class="in"><a href="javascript:void(0);">收起</a></li>
                                        <li class="source"><a href="__ROOT__{$obj.image.0.source}" target="_blank">查看原图</a></li>
                                    </ol>
                                    <img data="__ROOT__{$obj.image.0.unfold}" src="__IMG__/loading_100.png" alt="">
                                </div>
                            </case>
                            <default/>
                                <volist name="obj.image" id="imgs" >
                                    <div class="imgs"><img src="__ROOT__{$imgs.thumb}" alt=""></div>
                                    <div class="img_zoom" style="display: none;">
                                        <ol>
                                            <li class="in"><a href="javascript:void(0);">收起</a></li>
                                            <li class="source"><a href="__ROOT__{$imgs.source}" target="_blank">查看原图</a></li>
                                        </ol>
                                        <img data="__ROOT__{$imgs.unfold}" src="__IMG__/loading_100.png" alt="">
                                    </div>
                                </volist>
                        </switch>

                        <div class="footer">
                            <span class="time">{$obj.time}发布</span>
                            <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                        </div>
                    </dd>
                </dl>
            </volist>
        </div>
    </div>

        <div class="main_right">
                right
        </div>

        <div id="error">...</div>
        <div id="loading" class="loading">数据交互中...</div>
</block>