<div class="comment_content">
    <ol class="comment_list">
        <volist name="commentlist" id="obj">
            <li>
                <empty name="obj.domain">
                    <a href='{:U('Space/index',array('id'=>"obj.uid"))}'>{$obj.username}</a>
                    <else/>
                    <a href="__ROOT__/i/{$obj.domain}">{$obj.username}</a>
                </empty>
                :{$obj.content}
            </li>
            <li class="line">{$obj.time}</li>
        </volist>
    </ol>
</div>
