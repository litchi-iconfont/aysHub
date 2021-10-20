const Router = require('koa-router')

const userRouter = new Router();
//导入具体业务逻辑
const { create, avatarInfo } = require('../controller/userController');
// 导入错误处理逻辑、
const { verifyUser, handlePassword } = require('../middleware/userMiddleware')
//路径 中间件处理 映射
//创建users的中间件
//注册接口
//用户处理接口 判断用户传入数据是否合法 给用户密码加密 将加密完成的数据写入数据库
userRouter.post('/users', verifyUser, handlePassword, create);
//获取用户头像
userRouter.get("/:userId/avatar", avatarInfo);
module.exports = userRouter;