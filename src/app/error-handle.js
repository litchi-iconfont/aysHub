const errorType = require('../constants/error-type')
//错误提示
const errorHandler = (error, ctx) => {
    let status, message;
    switch (error.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400;
            message = "用户或者密码不能为空";
            break;
        case errorType.USER_ALREADY_EXISTS:
            status = 409;
            message = "用户已存在";
            break;
        case errorType.USER_DOES_NOT_EXITS:
            status = 400;
            message = "用户名不存在";
            break;
        case errorType.PASSWORD_IS_INCORRENT:
            status = 400;
            message = "密码错误";
            break;
        case errorType.UNAUTHORIZATION:
            status = 401;
            message = "无效token";
            break;
        case errorType.UNPERMISSION:
            status = 403;
            message = "您不具备操作权限";
            break;
        default:
            status = 404;
            message = "错误"
    }

    ctx.status = status;
    ctx.body = message;
}

module.exports = errorHandler;