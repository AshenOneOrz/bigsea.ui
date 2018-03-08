// Html
Sea.innerHTML = `
    <sea class="tooltip">
        <div class="inner"></div>
        <div class="arrow"></div>
    </sea>
    <sea class='confirm'>
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
    <sea class="btn previous">
        <i class="iconfont icon-left"></i>
    </sea>
    <input value="1" maxlength="3">
    <sea class="btn next">
        <i class="iconfont icon-right"></i>
    </sea>
    <sea class="btn primary jump">
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
            // Sea.confirm('测试')
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
        confirm.find('.ok').on('mousedown', function() {
            callback(true)
        })
        confirm.find('.no').on('mousedown', function() {
            callback(false)
        })
    },
    pagination() {
        let p = Sea('sea.pagination')
        let input = p.find('input')
        input.on('input', function(e) {
            let re = /\D/g
            let val = this.value.replace(re, '')
            let max = Number(p.dom.dataset.max) || 1
            if (Number(val) > max) {
                val = max
            }
            this.value = val
        })
        input.on('focus', function(e) {
            let max = p.dom.dataset.max || '1'
            input.dom.placeholder = max
            Sea.tooltip(this, `共 ${max} 页`, 'bottom')
        })
        p.find('.next').on('mousedown', function() {
            let max = Number(p.dom.dataset.max) || 1
            let i = Number(input.dom.value) + 1
            if (i <= max) {
                input.dom.value = i
            }
        })
        p.find('.previous').on('mousedown', function() {
            let i = Number(input.dom.value) - 1
            if (i > 0) {
                input.dom.value = i
            }
        })
        // 触发 jump_page 事件
        p.find('.jump').on('mousedown', function() {
            let e = new Event('jump_page', {bubbles: true})
            e.jump = Number(input.dom.value)
            this.dispatchEvent(e)
        })
    },
}

// 执行
Object.keys(Sea.bindEvent).forEach(key => {
    Sea.bindEvent[key]()
})
