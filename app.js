const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const usersRouter = require('./router/usersRouter.js')
let app = express()

// 配置ejs模板引擎
app.set('views', './views')
// 设置模板引擎渲染静态文件的目录
app.set('view engine', 'ejs')
// 使用的渲染引擎，渲染文件的后缀

// 配置body-parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 配置静态文件
app.use('/static/uploads', express.static('./uploads'))
app.use('/assets', express.static('./assets'))

// 注册路由中间件
app.use(usersRouter)

app.listen(3000, () => {
    console.log('running');
})