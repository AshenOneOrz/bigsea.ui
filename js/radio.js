Sea.UIEvent.radio = function() {
    Sea(document).on('click', 'sea.radio', function() {
        let e = Sea(this)
        if (e.attr('checked') === null) {
            let name = e.attr('name')
            let all = Sea(`sea.radio[name="${name}"]`)
            all.removeAttr('checked')
            e.attr('checked', '')
        }
    })
}
