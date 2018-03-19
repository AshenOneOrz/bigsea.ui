bigsea.prototype.table = function(data) {
    //
    let thead = '<thead><tr>'
    data.thead.forEach(e => {
        thead += `<th>${e}</th>`
    })
    thead += '</tr></thead>'
    //
    let tbody = '<tbody>'
    data.tbody.forEach(arr => {
        tbody += '<tr>'
        arr.forEach(e => {
            tbody += `<td>${e}</td>`
        })
        tbody += '</tr>'
    })
    tbody += '</thead>'
    //
    this.find('table').html(thead + tbody)
}
