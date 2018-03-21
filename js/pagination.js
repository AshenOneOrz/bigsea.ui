Sea.innerHTML = `
    <sea class="btn previous">
        <i class="iconfont icon-left"></i>
    </sea>
    <input value="第 1 页">
    <sea class="btn next">
        <i class="iconfont icon-right"></i>
    </sea>`.html()
Sea('sea.pagination').html(Sea.innerHTML)
//
Sea.UIEvent.pagination = function() {
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
        Sea(this).tooltip(`共 ${max} 页`, 'top')
    })
    input.on('blur', function(e) {
        // 触发 jump_page 事件
        let i = Number(this.value.replace(/\D/g, '')) || 1
        this.value = `第 ${i} 页`
        Sea(this).iEvent('jump_page', {jump: i})
    })
    input.on('keydown', function(e) {
        if (e.keyCode === 13) {
            this.blur()
        } else if (e.keyCode === 8) {
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
        } else {
            Sea(this).tooltip('已是最后一页了', 'topRight')
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
        } else {
            Sea(this).tooltip('已经是第一页了', 'topLeft')
        }
    })
}
