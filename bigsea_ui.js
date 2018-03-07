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
// Sea.innerHTML = ``.html()
// Sea('sea.pagination').html(Sea.innerHTML)

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
        let max = Number(p.dom.dataset.max)
        input.dom.placeholder = String(max)
        input.on('input', function(e) {
            let re = /\D/g
            let val = this.value.replace(re, '')
            this.value = val
        })
        input.on('focus', function(e) {
            Sea.tooltip(this, '以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。')
        })
        p.find('.next').on('mousedown', function() {
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
