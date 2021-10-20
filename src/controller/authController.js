const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('../app/config');

class AuthController {
    async login(ctx, next) {
        //颁发签名
        const { id, name } = ctx.user;
        const token = jwt.sign({ id, name }, PRIVATE_KEY, {
            //生命周期
            expiresIn: 60 * 60 * 24,
            algorithm: "RS256"
        });

        ctx.body = { id, name, token }
    }

    async success(ctx, next) {
        ctx.body = '授权登录成功'
    }
}



module.exports = new AuthController()

// class AuthController {
//     async login(ctx, next) {
//         //提取id和name
//         const { id, name } = ctx.user;
//         ctx.body = `欢迎${id, name},回来`;
//         console.log(PRIVATE_KEY);
//     }
// }