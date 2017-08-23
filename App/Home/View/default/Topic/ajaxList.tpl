<volist name="ajaxlist" id="obj">
  <dl class="weibo_content_data">
    <dt><a href="javascript:void(0);"><img src="__IMG__/small_face.jpg" alt=""></a></dt>
    <dd>
      <h4><a href="javascript:void(0);">{$obj.username}</a></h4>
      <p>{$obj.content}</p>
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
