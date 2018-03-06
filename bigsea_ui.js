// Html 弹窗
Sea.innerHTML = `<sea class='confirm'>
    <div class="cont">
        <text class="msg"></text>
        <div class="btns">
            <btn class="ok">确定</btn>
            <btn class="no">取消</btn>
        </div>
    </div>
    </sea>`.html()
Sea('body').append(Sea.innerHTML)
// Html 分页
Sea.innerHTML = `<sea class="input-group">
        <sea class="btn">
            <i class="iconfont icon-left"></i>
        </sea>
        <input value="1" maxlength="3" placeholder="255">
        <sea class="btn">
            <i class="iconfont icon-right"></i>
        </sea>
        <sea class="btn primary">
            <text>跳页</text>
        </sea>
    </sea>`.html()
Sea('sea.pagination').html(Sea.innerHTML)

// Events
Sea.bindEvent = {
    btn() {
        Sea('sea.btn').on('mousedown', function(event) {
            let e = Sea(this)
            e.addClass('clicked')
            setTimeout(function() {
                e.removeClass('clicked')
            }, 400)
            Sea.confirm('测试')
        })
        Sea('sea.btn-group').on('mousedown', '.btn', function(event, index) {
            let element = Sea(this)
            let group = element.parent()
            group.data('now', index)
            group.find('.btn').removeClass('checked')
            element.addClass('checked')
        })
    },
    confirm() {
        let confirm = Sea('sea.confirm')
        let callback = function(bool) {
            confirm.hide()
            let f = Sea.confirm.callback
            if (f && typeof f == 'function') {
                f(bool)
                Sea.confirm.callback = undefined
            } else {
                // log("not callback")
            }
        }
        confirm.find('.ok').on('click', function() {
            callback(true)
        })
        confirm.find('.no').on('click', function() {
            callback(false)
        })
    },
    pagination() {

    },
}

// 执行
Object.keys(Sea.bindEvent).forEach(key => {
    Sea.bindEvent[key]()
})
