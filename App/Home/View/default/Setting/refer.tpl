<extend name="base/common" />
<block name="head">
    <script type="text/javascript" src="__JS__/setting.js"></script>
    <link rel="stylesheet" href="__CSS__/setting.css">
</block>

<block name="main">
    <include file="Setting/main_left" />
    <div class="main_right">
        <h2>@提及到我</h2>
        <dl>
            <empty name="refer">
                <p>没有任何提及您的信息</p>
                <else/>
                <foreach name="refer" item="obj">
                    <li>
                        <switch name="obj.read">
                            <case value="0">{$obj.time}:  <strong>{$obj.user.username}</strong>在文章 <a href="###">{$obj.topic.content|mb_substr=0,10,utf8}</a>提到你了　<a class="read red" flag="0" atid="{$obj.id}" href="javascript:void (0);">[未读]</a></case>
                            <case value="1">{$obj.time}:  <strong>{$obj.user.username}</strong>在文章 <a href="###">{$obj.topic.content|mb_substr=0,10,utf8}</a>提到你了　<a class="read green" flag="1" atid="{$obj.id}" href="javascript:void (0);">[已读]</a></case>
                        </switch>

                    </li>
                </foreach>
            </empty>

        </dl>
    </div>
    <div id="loading">...</div>
    <div id="error">...</div>
</block>