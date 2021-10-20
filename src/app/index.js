//导入koa模块
const Koa = require('koa');
//安装解析JSON依赖 cnpm i koa-bodyparser
const bodyparser = require('koa-bodyparser')
//导入koa-paes
//导入userRouter模块
const userRouter = require('../router/userRouter');
//导入authRouter模块
const authRouter = require('../router/authRouter')
//导入错误提示模块
const errorHandler = require('../app/error-handle')
// 导入momentRouter
const momentRouter = require('../router/momentRouter')
// 导入commentRouter
const commentRouter = require('../router/commontRouter')
// 导入labelRouter模块
const labelRouter = require('../router/labelRouter')
//导入fileRouter模块
const fileRouter = require('../router/fileRouter')

const app = new Koa();


// 使用中间件
app.use(bodyparser())
app.use(userRouter.routes());
//判断是否存在中间件，没有返回一个错误提示
app.use(userRouter.allowedMethods());
app.use(authRouter.routes());
//判断是否存在中间件，没有返回一个错误提示
app.use(authRouter.allowedMethods());
app.use(momentRouter.routes());
//判断是否存在中间件，没有返回一个错误提示
app.use(momentRouter.allowedMethods());
app.use(commentRouter.routes());
//判断是否存在中间件，没有返回一个错误提示
app.use(commentRouter.allowedMethods());
app.use(labelRouter.routes());
//判断是否存在中间件，没有返回一个错误提示
app.use(labelRouter.allowedMethods());

app.use(fileRouter.routes());
//判断是否存在中间件，没有返回一个错误提示
app.use(fileRouter.allowedMethods());

app.on('error', errorHandler)


module.exports = app;