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

// Event
let e = Sea('sea.confirm')
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
e.find('.ok').on('click', function() {
    callback(true)
})
e.find('.no').on('click', function() {
    callback(false)
})
