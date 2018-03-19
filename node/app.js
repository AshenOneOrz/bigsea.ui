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

const SeaUI = {
    html() {
        let files = fs.readdirSync('html')
        let html = '<!-- html -->'
        for(let file of files) {
            let temp = fs.readFileSync(`html/${file}`, 'utf8').replace(/>(\s+)</img, '><')
            let name = file.split('.')[0]
            html += `<div name="demo-${name}">${temp}</div>`
        }
        return html
    },
    css() {
        let files = fs.readdirSync('css')
        let css = '<!-- css -->'
        for(let file of files) {
            css += `<link href="css/${file}" rel="stylesheet">`
        }
        return css
    },
    js() {
        let files = fs.readdirSync('js')
        let js = '<!-- js -->'
        js += '<script src="bigsea.js"></script>'
        for(let file of files) {
            js += `<script src="js/${file}"></script>`
        }
        js += '<script src="bigsea_ui.js"></script>'
        return js
    },
    vip() {
        let files = fs.readdirSync('vip')
        let vip = '<!-- vip -->'
        for(let file of files) {
            let name = file.split('.')[0]
            vip += `<script name="${name}" src="vip/${file}"></script>`
        }
        return vip
    }
}

// 主页
app.get('/dev', (req, res) => {
    let html = fs.readFileSync(`node/index.html`, 'utf8').replace(/>(\s+)</img, '><')
    html = html.replace('<!-- css -->',  SeaUI.css())
    html = html.replace('<!-- html -->', SeaUI.html())
    html = html.replace('<!-- js -->',   SeaUI.js())
    html = html.replace('<!-- vip -->',  SeaUI.vip())
    // 写入首页预览 ui.bigsea.cc
    fs.writeFileSync('index.html', '<h2 style="text-align:center">展示页面</h2>' + html, 'utf8')
    res.end(html)
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
    console.log("应用实例，访问地址为 http://%s:%s/dev", ip, port)
})
