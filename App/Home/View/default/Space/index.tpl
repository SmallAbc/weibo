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
                <dd class="username">{$user.username}</dd>
                <dd class="info">{$user.extend.intro}</dd>
            </dl>
        </div>
    </div>
    <div class="main_right">

    </div>
</block>