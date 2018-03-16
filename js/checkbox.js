Sea.UIEvent.checkbox = function() {
    // 单个
    Sea(document).on('click', 'sea.checkbox.one', function() {
        let e = Sea(this)
        e.toggleAttr('checked')
        let name = e.attr('name')
        let checkAll = Sea(`sea.checkbox.all[name="${name}"]`)
        let checkBox = Sea(`sea.checkbox.one[name="${name}"]`)
        if (checkBox.dom && checkAll.dom) {
            let selectAll = true
            let selectAllnot = true
            checkBox.each(one => {
                if (one.attr('checked') === null) {
                    selectAll = false
                } else {
                    selectAllnot = false
                }
            })
            if (selectAll) {
                checkAll.removeAttr('indeterminate')
                checkAll.attr('checked', '')
            } else if (selectAllnot) {
                checkAll.removeAttr('checked')
                checkAll.removeAttr('indeterminate')
            } else {
                checkAll.attr('indeterminate', '')
            }
        }
    })
    // 全选
    Sea(document).on('click', 'sea.checkbox.all', function() {
        let e = Sea(this)
        let name = e.attr('name')
        let checkAll = Sea(`sea.checkbox.all[name="${name}"]`)
        checkAll.toggleAttr('checked')
        checkAll.removeAttr('indeterminate')
        let checkBox = Sea(`sea.checkbox.one[name="${name}"]`)
        if (checkBox.dom) {
            if (e.attr('checked') === null) {
                checkBox.each(one => {
                    one.removeAttr('checked')
                })
            } else {
                checkBox.each(one => {
                    one.attr('checked', '')
                })
            }
        }

    })
    // 初始化
    Sea('sea.checkbox.one[checked=""]').each(e => {
        let name = e.attr('name')
        let checkAll = Sea(`sea.checkbox.all[name="${name}"]`)
        let checkBox = Sea(`sea.checkbox.one[name="${name}"]`)
        if (checkBox.dom, checkAll.dom) {
            let selectAll = true
            checkBox.each(one => {
                if (one.attr('checked') === null) {
                    selectAll = false
                }
            })
            if (selectAll) {
                checkAll.removeAttr('indeterminate')
                checkAll.attr('checked', '')
            } else {
                checkAll.attr('indeterminate', '')
            }
        }
    })
}
