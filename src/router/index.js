const fs = require('fs')

const useRouter = (app) => {
    fs.readFileSync(__dirname).forEach(file => {
        if (file === 'index.js') return;
        const router = require(`./${file}`);
        app.use(userRouter.routes());
        app.use(userRouter.allowedMethods())
    })
}

module.exports = useRouter;