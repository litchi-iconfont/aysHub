//动态接口
const Router = require('koa-router');

const momentRouter = new Router({ prefix: '/moment' });

const { create, detail, list, update, remove, addlabels } = require('../controller/momentController');

const { verifyAuth, verifyPermission } = require('../middleware/authMiddleware');
//用户发表接口
momentRouter.post('/', verifyAuth, create);
//浏览动态接口(单一)
momentRouter.get('/:momentId', detail);
//查询多条信息
momentRouter.get('/', list);
//修改动态接口
//用户必须登录，用户必须具备权限
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
//用户删除数据
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

//给动态添加标签
momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, addlabels)

module.exports = momentRouter;