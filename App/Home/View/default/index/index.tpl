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
            <dl class="weibo_content_data">
                <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                <dd>
                    <h4><a href="javascript:void(0);">宫本武藏</a></h4>
                    <p>烽火戏诸侯，指西周时周幽王，为褒姒（bāo sì）一笑，点燃了烽火台，戏弄了诸侯。褒姒看了果然哈哈大笑。幽王很高兴，因而又多次点燃烽火。后来诸侯们都不相信了，也就渐渐不来了。后来犬戎攻破镐京，杀死周幽王，后来周幽王的儿子周平王即位，开始了东周时期。</p>
                    <div class="img"><img src="./Uploads\2017-08-20\180_5999b145662a3.jpg" alt=""></div>
                    <div class="footer">
                        <span class="time">8月21日 0:17</span>
                        <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                    </div>
                </dd>
                <dl class="weibo_content_data">
                <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                <dd>
                    <h4><a href="javascript:void(0);">宫本武藏</a></h4>
                    <p>烽火戏诸侯，指西周时周幽王，为褒姒（bāo sì）一笑，点燃了烽火台，戏弄了诸侯。褒姒看了果然哈哈大笑。幽王很高兴，因而又多次点燃烽火。后来诸侯们都不相信了，也就渐渐不来了。后来犬戎攻破镐京，杀死周幽王，后来周幽王的儿子周平王即位，开始了东周时期。</p>
                    <div class="img"><img src="./Uploads/2017-08-21/180_5999b81fa73ee.jpg" alt=""></div>
                    <div class="footer">
                        <span class="time">8月21日 0:17</span>
                        <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                    </div>
                </dd>
                    <dl class="weibo_content_data">
                <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                <dd>
                    <h4><a href="javascript:void(0);">宫本武藏</a></h4>
                    <p>烽火戏诸侯，指西周时周幽王，为褒姒（bāo sì）一笑，点燃了烽火台，戏弄了诸侯。褒姒看了果然哈哈大笑。幽王很高兴，因而又多次点燃烽火。后来诸侯们都不相信了，也就渐渐不来了。后来犬戎攻破镐京，杀死周幽王，后来周幽王的儿子周平王即位，开始了东周时期。</p>
                    <div class="img"><img src="./Uploads/2017-08-21/180_5999b8024d18e.jpg" alt=""></div>
                    <div class="footer">
                        <span class="time">8月21日 0:17</span>
                        <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                    </div>
                </dd>
                        <dl class="weibo_content_data">
                <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
                <dd>
                    <h4><a href="javascript:void(0);">宫本武藏</a></h4>
                    <p>烽火戏诸侯，指西周时周幽王，为褒姒（bāo sì）一笑，点燃了烽火台，戏弄了诸侯。褒姒看了果然哈哈大笑。幽王很高兴，因而又多次点燃烽火。后来诸侯们都不相信了，也就渐渐不来了。后来犬戎攻破镐京，杀死周幽王，后来周幽王的儿子周平王即位，开始了东周时期。</p>
                    <div class="img"><img src="./Uploads/2017-08-21/180_5999b8114df7a.jpg" alt=""></div>
                    <div class="footer">
                        <span class="time">8月21日 0:17</span>
                        <span class="handler">赞(0) | 转发 | 评论 | 收藏</span>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
        <div class="main_right">
                right
        </div>

        <div id="error">...</div>
        <div id="loading" class="loading">数据交互中...</div>
</block>