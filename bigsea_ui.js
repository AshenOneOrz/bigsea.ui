// 执行
Object.keys(Sea.UIEvent).forEach(key => {
    Sea.UIEvent[key]()
})


// 测试
// Sea('.btn').on('click', function() {
//     if (Sea('input').isHidden()) {
//         Sea('input').fadeIn()
//     } else {
//         Sea('input').fadeOut()
//     }
// })

// Sea('sea.pagination').on('jump_page', function(e) {
//     log(e.data)
// })
