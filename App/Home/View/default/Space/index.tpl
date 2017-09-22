<extend name="base/common" />
<block name="head">
    <link rel="stylesheet" href="__CSS__/space.css">
</block>

<block name="main">
    <div class="main_left">
        <div class="header">
            <dl>
                <dt>

                <if condition="$user.face eq 0">
                    <img src="__IMG__/big.jpg" alt="">
                    <else/>
                    <img src="__ROOT__{$user.face.big}" alt="">
                </if>
                </dt>
                <dd class="username">{$user.username}
                    <empty name="user.approve">
                        <else/>
                        <img src="__IMG__/approve.png" alt="微博个人认证" title="微博个人认证">
                        <volist name='user.approve' id="app">
                            <p class="app-info">{$app.name}---{$app.info}</p>
                        </volist>
                    </empty>
                </dd>
                <dd class="info">{$user.extend.intro}</dd>
            </dl>
        </div>
    </div>
    <div class="main_right">
        <empty name="user.approve">
            <else/>

            <volist name='user.approve' id="app">
                <dl>
                    <dt><img src="__IMG__/approve.png" alt="微博个人认证" title="微博个人认证"> 微博认证资料</dt>
                    <dd>{$app.name}---{$app.info}</dd>
                </dl>
            </volist>
        </empty>
    </div>
</block>