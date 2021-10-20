//导入用户数据模块
const sevice = require('../sevice/userSevice')
const flieService = require('../sevice/flieService')
const fs = require('fs')
//user具体业务逻辑
class userController {
    async create(ctx, next) {
        //获取用户请求传递的参数
        const user = ctx.request.body;
        //查询数据
        const result = await sevice.create(user);
        //返回数据
        ctx.body = result;
    }
    async avatarInfo(ctx, next) {
        const { userId } = ctx.params;
        const avatarInfo = await flieService.getAvatarByUserId(userId);
        ctx.response.set('content-type', avatarInfo.mimetype);
        ctx.body = fs.createReadStream(`./uploads/avatar/${avatarInfo.filename}`);
    }
}

// 构造函数使用需要new
module.exports = new userController();
