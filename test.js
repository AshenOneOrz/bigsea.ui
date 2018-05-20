Sea(document).on('input', 'input', function(event) {
    this.setAttribute('value', this.value)
})
let o = {
    arr: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
    ]
}
let render = function(o) {
    let html = ''
    for (var i = 0; i < o.arr.length; i++) {
        let e = o.arr[i]
        html += `<input type="text" name="${i}" value="${e}">`
    }
    return html
}
Sea('.inputs').html(render(o))
Sea('.inputs').ob({
    childList: true,
    attributes: true,
    attribute: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true,
    attributesFilter: ['value'],
}, function(e) {
    log(e)
    o.arr[e.target.name] = e.target.value
})
