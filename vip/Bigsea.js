// 大海测试
(function() {
    // 表格
    let btn = `
        <sea class="btn">
            <i class="iconfont icon-edit"></i><text>编辑</text>
        </sea>`
    let check = `<input type="checkbox">`
    Sea.table.n1 = {
        thead: [check,'课程管理', '老师', '学生人数', '管理'],
        tbody: [
            [check, "水彩风景课", "鼠帝", "40", btn],
            [check, "创作思维课", "大宝,虫虫", "20", btn],
        ],
    }
    Sea('sea.table.test').dom.dataset.key = 'Sea.table.n1'

    // 动画
    // Sea('.btn').on('click', function() {
    //     if (Sea('input').isHidden()) {
    //         Sea('input').fadeIn()
    //     } else {
    //         Sea('input').fadeOut()
    //     }
    // })
})()
