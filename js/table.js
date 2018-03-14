Sea.UIEvent.table = function() {
    let options = {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ["data-key"],
    }
    Sea('sea.table').ob(options, function() {
        let data = eval(this.dataset.key)
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
        let html = `<table>${thead}${tbody}</table>`
        Sea(this).find('table').html(html)
    })
}
