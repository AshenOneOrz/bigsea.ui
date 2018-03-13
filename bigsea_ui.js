// 执行
Object.keys(Sea.UIEvent).forEach(key => {
    Sea.UIEvent[key]()
})

// 测试

// 动画
// Sea('.btn').on('click', function() {
//     if (Sea('input').isHidden()) {
//         Sea('input').fadeIn()
//     } else {
//         Sea('input').fadeOut()
//     }
// })

// 表格
Sea.table.n1 = {
    thead: ['姓名', '年龄', '住址'],
    tbody: [
        ['胡彦兵', '32', '西湖区湖底公园1号'],
        ['吴彦祖', '42', '西湖区湖底公园1号'],
        ['吴彦祖', '42', '西湖区湖底公园1号'],
        ['吴彦祖', '42', '西湖区湖底公园1号'],
    ],
}
Sea('sea.table.test').dom.dataset.key = 'Sea.table.n1'
