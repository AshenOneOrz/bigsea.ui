// HTML
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

// Event confirm
let confirm = Sea('sea.confirm')
let callback = function(bool) {
    e.hide()
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

// Event btn
Sea('sea.btn').on('click', function() {
    let e = Sea(this)
    e.addClass('clicked')
    setTimeout(function() {
        e.removeClass('clicked')
    }, 400)
    // Sea.confirm('测试')
})
Sea('sea.btn-group').on('click', '.btn', function(event, index) {
    let element = Sea(this)
    let group = element.parent()
    group.data('now', index)
    group.find('.btn').removeClass('checked')
    element.addClass('checked')
})
