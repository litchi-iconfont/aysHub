const errorTypes = require('../constants/error-type')
const sevice = require('../sevice/userSevice')
const md5password = require('../utils/password_handle')
// 错误处理
const verifyUser = async (ctx, next) => {
    //1.获取用户名和密码
    const { name, password } = ctx.request.body;
    //2.判断用户名或者密码是否为空
    if (!name || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit('error', error, ctx);
    }
    //3.判断这次注册的用户名是否重复
    const result = await sevice.getUserByName(name);
    if (result.length) {
        const error = new Error(errorTypes.USER_ALREADY_EXISTS);
        return ctx.app.emit('error', error, ctx);
    };
    await next();
}

//密码加密
const handlePassword = async (ctx, next) => {
    let { password } = ctx.request.body;
    //采用MD5加密方式
    password = md5password(password);
    // password = shapassword(password);
    await next();
}

module.exports = {
    verifyUser,
    handlePassword
}