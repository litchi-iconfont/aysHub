//用户登录模块
const Router = require('koa-router');

const authRouter = new Router();
//用户登录逻辑
const { login, success } = require('../controller/authController');
//用户登录校验
const { verifyLogin, verifyAuth } = require('../middleware/authMiddleware');

//用户登录接口 判断用户的用户名密码是否正确 给用户密码进行加密
authRouter.post('/login', verifyLogin, login)
//验证授权接口
authRouter.get('/test', verifyAuth, success)

module.exports = authRouter;