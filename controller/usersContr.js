// 引入userdb
const userdb =require('../model/userdb.js')

// 处理所有与用户有关的逻辑
module.exports = {
    // 得到所有用户的信息 并且渲染页面
    getUsers:(req,res)=>{  //在服务器中通过 ejs 结合 mysql 提供的数据进行渲染
        userdb.query('SELECT * FROM users',result=>{
            res.render('users',{result:result})
        })

    },
    // 新增用户
    addUser:(req,res)=>{
        // 使用body-parser接收参数
        let params = req.body
        // 将数据添加至数据库
        let addSql = `INSERT INTO users (slug,email,password,nickname,status) VALUES('${params.slug}','${params.email}','${params.password}','${params.nickname}','activated')`
        // 执行sql语句
        userdb.query(addSql,result=>{
            res.send({
                status:200,
                msg:'新增成功'
            
            })
        })
    },
    // 获取所有用户信息
    getAllUsers:(req,res)=>{
        let selSql = `SELECT * FROM users`
        userdb.query(selSql,result=>{
            res.send(result)
        })
    },
    delUser:(req,res)=>{
        let id = req.query.id
        let delSql = `DELETE FROM users WHERE id=${id}`
        userdb.query(delSql,result=>{
            res.send({
                status:200,
                msg:'删除成功'
            })
        })
    },
    editUser:(req,res)=>{
        // 获取参数
        let id = req.query.id
        let sql = `SELECT * FROM users WHERE id=${id}`
        // 执行sql语句
        userdb.query(sql,result=>{
            console.log(result);
            res.send({
                status:200,
                msg:'查询成功',
                data:result[0]
            })
        })
    },
    updataUser:(req,res)=>{
        let params = req.body
        let sql =`UPDATE users SET email='${params.email}',slug='${params.slug}',nickname='${params.nickname}',password='${params.password}' WHERE id='${params.id}'`
        userdb.query(sql,result=>{
            res.send({
                status:200,
                msg:'修改成功',

            })
        })
    },
    delUserById:(req,res)=>{
        let ids = req.body.id
        console.log(ids);
        let sql = `DELETE FROM users WHERE id in (${ids})`
        userdb.query(sql,result=>{
            res.send({
                status:200,
                msg:'删除成功'
            })
        })
    }
}