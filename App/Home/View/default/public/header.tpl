<div id="header">
  <div class="header_main">
    <div class="logo">logo</div>
    <div class="nav">
      <ul>
        <li><a href="{:u('index/index')}">首页</a></li>
        <li><a href="###">广场</a></li>
        <li><a href="###">图片</a></li>
        <li><a href="###">找人</a></li>
      </ul>
    </div>
    <div class="person">
      <ul>
        <li><a href="{:U('Setting/index')}">{:session('user_auth')['username']},欢迎您!</a></li>
        <li class="app"><span>消息
            <dl class="list">
                <dd><a href="{:U('Setting/refer')}">
                        <!--<empty name="count">
                            @提及我的
                            <else/>
                            @提及我<span class="refercount">({$count})</span>
                        </empty>-->
                        @提及我<span class="refercount"></span>
                    </a></dd>
                <dd><a href="#">收到的评论</a></dd>
                <dd><a href="#">发出的评论</a></dd>
                <dd><a href="#">我的私信</a></dd>
                <dd><a href="#">系统消息</a></dd>
                <dd><a href="#" class="line">发私信</a></dd>
            </dl>
          </span></li>
        <li class="app">
            <span>账号
                <dl class="list">
                    <dd><a href="{:U('Setting/index')}">个人设置</a></dd>
                    <dd><a href="#">排行榜</a></dd>
                    <dd><a href="#">申请认证</a></dd>
                    <dd><a href="{:u('User/logout')}" class="line">退出</a></dd>
                </dl>
            </span>
        </li>
      </ul>
    </div>
    <div class="search">
      <form action="#" method="post"></form>
      <label for="search"><input type="text" id="search" name="search" placeholder="请输入文章或或作者关键字" ></label>
      <a href="javascript:void (0)"></a>
    </div>
      <div class="referbox" style="display: none;">有<span></span>条@你的信息! <i>X</i>
      </div>
  </div>
</div>
