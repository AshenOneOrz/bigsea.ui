Sea.innerHTML = `
    <sea class="btn choose">
        <i class="iconfont icon-upload"></i>
        <text>选择文件</text>
    </sea>
    <input type="file">
    <sea class="group list"></sea>
    <sea class="btn start primary">
        <text>开始上传</text>
    </sea>`.html()
Sea('sea.upload').html(Sea.innerHTML)

Sea.UIEvent.upload = function() {
    // developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file
    Sea('sea.upload').on('mousedown', '.choose', function() {
        let e = Sea(this)
        let input = e.next()
        for (let key of ['multiple', 'accept']) {
            let val = e.parent().attr(key)
            if (val !== null) {
                input.attr(key, val)
            }
        }
        input.click()
    })
    Sea('sea.upload').on('mousedown', '.del', function() {
        Sea(this).parent().remove()
    })
    Sea('sea.upload').on('mousedown', '.start', function() {
        let that = Sea(this)
        let list = that.prev().child()
        let arr = []
        list.each(function(e) {
            arr.push(e.text())
        })
        // 触发事件
        if (arr.length > 0) {
            Sea(this).iEvent('upload', {files: arr})
        }
    })
    Sea('sea.upload').on('change', 'input', function() {
        for (let e of this.files) {
            let html = `<text>
                <i class="iconfont icon-paperclip"></i>
                <span>${e.name}</span>
                <i class="del iconfont icon-close"></i>
            </text>`
            Sea(this).next().append(html)
        }
    })
}
