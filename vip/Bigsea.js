// 大海测试
(function() {
    // 表格
    let btn = `
        <sea class="btn">
            <i class="iconfont icon-edit"></i><text>编辑</text>
        </sea>`
    let checkAll = `
        <sea class="checkbox all" name="nino">
            <div class="box"></div>
        </sea>`
    let checkBox = `
        <sea class="checkbox one" name="nino">
            <div class="box"></div>
        </sea>`
    Sea.table.n1 = {
        thead: [checkAll,'课程管理', '老师', '学生人数', '管理'],
        tbody: [
            [checkBox, "水彩风景课", "鼠帝", "40", btn],
            [checkBox, "创作思维课", "大宝,虫虫", "20", btn],
        ],
    }
    Sea('sea.table.test').dom.dataset.key = 'Sea.table.n1'

    // 文字提示
    Sea('.test-tooltip').on('mouseover', 'sea.btn', function() {
        Sea(this).tooltip('这是一段文字提示：' + this.innerText, this.innerText)
    })

    // 动画
    // Sea('.btn').on('click', function() {
    //     if (Sea('input').isHidden()) {
    //         Sea('input').fadeIn()
    //     } else {
    //         Sea('input').fadeOut()
    //     }
    // })
})()
