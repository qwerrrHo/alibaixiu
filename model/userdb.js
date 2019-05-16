//执行与用户相关的数据库操作
const mysql = require('mysql')

module.exports.query = (sql, callback) => {
    // 创建一个连接对象
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'root',
        database:'alibaixiu'
    })
    // 开启连接
    connection.connect()
    // 执行sql语句
    connection.query(sql,(err,result)=>{
        if(err) {
            return console.log(err.message);
        }
        callback(result)
    })
    connection.end()
}