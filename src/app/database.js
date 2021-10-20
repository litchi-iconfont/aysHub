const mysql = require('mysql2');
const config = require('../app/config')

//创建连接池
const connections = mysql.createPool({
    //请求地址
    host: config.MYSQL_HOST,
    //端口
    port: config.MYSQL_PORT,
    //连接名称
    database: config.MYSQL_DATABASE,
    //用户名
    user: config.MYSQL_USER,
    //用户密码
    password: MYSQL_PASSWORD
});
// connections.getConnection((err, conn) => {
//     conn.connect((err) => {
//         if (err) {
//             console.log("连接失败:", err);
//         } else {
//             console.log("数据库连接成功~");
//         }
//     })
// });

module.exports = connections.promise();