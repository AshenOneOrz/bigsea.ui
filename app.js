const log = console.log.bind(console, '>>>')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// 公开文件
app.use(express.static('./'))

// 设置 bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 主页
app.get('/', (req, res) => {
    let html = fs.readFileSync(`main.html`, 'utf8').replace(/>(\s+)</img, '><')
    let files = fs.readdirSync('html')
    let body = '<!-- html -->'
    for(let file of files) {
        let temp = fs.readFileSync(`html/${file}`, 'utf8').replace(/>(\s+)</img, '><')
        let name = file.split('.')[0]
        body += `<div class="demo" name="${name}">${temp}</div>`
    }
    html = html.replace('<!-- html -->', body)
    res.send(html)
})

// 404
app.use((req, res) => {
    res.status(404)
    res.send('<h1>404<hr>页面未找到</h1>')
})
// 500
app.use((err, req, res, next) => {
    console.error('出现错误', err.stack)
    res.status(500)
    res.send('<h1>500<hr>出现错误</h1>')
})

// listen 函数监听端口
let server = app.listen(1130, '0.0.0.0', function () {
    let ip = server.address().address
    if (ip === '0.0.0.0') {
        let os = require("os")
        let interfaces = os.networkInterfaces ? os.networkInterfaces() : {}
        for (let k in interfaces) {
            for (let k2 in interfaces[k]) {
                let address = interfaces[k][k2]
                if (address.family === "IPv4" && !address.internal) {
                    ip = address.address
                    break
                }
            }
        }
    }
    let port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", ip, port)
})
