const app = require('./src/app/index');
const config = require('./src/app/config');
require('./src/app/database');

app.listen(config.APP_PORT, () => {
    console.log(`${config.TL}启动成功`);
})

//npm install dotenv 依赖dotenv获取根目录下的变量