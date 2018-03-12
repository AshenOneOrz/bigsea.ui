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
Sea.innerHTML = `
    <sea class="btn previous">
        <i class="iconfont icon-left"></i>
    </sea>
    <sea class="input-group">
        <input value="第 1 页">
    </sea>
    <sea class="btn next">
        <i class="iconfont icon-right"></i>
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
            let p = Sea(this).parent('.pagination')
            //
            let val = Number(this.value.replace(/\D/g, ''))
            let max = Number(p.dom.dataset.max) || 1
            if (val > max) {
                val = max
            }

            this.value = `第 ${val} 页`
        })
        input.on('focus', function(e) {
            let p = Sea(this).parent('.pagination')
            let input = p.find('input')
            //
            let max = p.dom.dataset.max || '1'
            this.placeholder = max
            Sea.tooltip(this, `共 ${max} 页`, 'bottom')
        })
        input.on('blur', function(e) {
            // 触发 jump_page 事件
            let i = Number(this.value.replace(/\D/g, '')) || 1
            this.value = `第 ${i} 页`
            Sea(this).iEvent('jump_page', {jump: i})
        })
        input.on('keydown', function(e) {
            //
            if (e.keyCode === 13) {
                this.blur()
            } else if (e.keyCode === 8) {
                //
                let val = this.value.replace(/\D/g, '').slice(0, -1)
                this.value = `第 ${val} 页`
            }
        })

        p.find('.next').on('mousedown', function() {
            let p = Sea(this).parent('.pagination')
            let input = p.find('input')
            //
            let max = Number(p.dom.dataset.max) || 1
            let i = Number(input.dom.value.replace(/\D/g, '')) + 1
            if (i <= max) {
                input.dom.value = `第 ${i} 页`
                Sea(this).iEvent('jump_page', {jump: i})
            }
        })
        p.find('.previous').on('mousedown', function() {
            let p = Sea(this).parent('.pagination')
            let input = p.find('input')
            //
            let i = Number(input.dom.value.replace(/\D/g, '')) - 1
            if (i > 0) {
                input.dom.value = `第 ${i} 页`
                Sea(this).iEvent('jump_page', {jump: i})
            }
        })
    },
}

// 执行
Object.keys(Sea.bindEvent).forEach(key => {
    Sea.bindEvent[key]()
})
