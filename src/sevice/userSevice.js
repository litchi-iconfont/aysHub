const connection = require('../app/database')
//用户数据处理
class userSevice {
    //user就是用户传递过来的数据
    async create(user) {
        //密码加密
        const { name, password } = user;
        //创建一个SQL语句 
        const statement = `INSERT INTO users (name,password) VALUES (?,?)`;
        //执行SQL语句
        const result = await connection.execute(statement, [name, password]);
        //将user存储到数据库中
        return result[0];
    }
    //判断用户名是否重复
    async getUserByName(name) {
        const statement = `SELECT * FROM users WhERE name=?`;
        const result = await connection.execute(statement, [name]);
        return result[0];
    }
}

module.exports = new userSevice();