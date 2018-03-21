Sea.UIEvent.btn = function() {
    Sea(document).on('mousedown', 'sea.btn',function(event) {
        let e = Sea(this)
        e.addClass('clicked')
        setTimeout(function() {
            e.removeClass('clicked')
        }, 400)
        // Sea.confirm('测试')
    })
    Sea('sea.group').on('mousedown', 'sea.btn', function(event, index) {
        let element = Sea(this)
        let group = element.parent()
        if (group.find('input').dom === undefined) {
            group.data('now', index)
            group.find('.btn').removeAttr('checked')
            element.attr('checked', '')
        }
    })
}
