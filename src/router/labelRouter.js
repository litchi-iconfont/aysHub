// 标签模块
const Router = require('koa-router');
const labelRouter = new Router({ prefix: '/label' });
const { verifyAuth } = require('../middleware/authMiddleware')
const { create, list } = require('../controller/labelController')

labelRouter.post('/', verifyAuth, create)
labelRouter.get('/', list)

module.exports = labelRouter;