// 引入userdb
const userdb =require('../model/userdb.js')

// 处理所有与用户有关的逻辑
module.exports = {
    // 得到所有用户的信息 并且渲染页面
    getUsers:(req,res)=>{  //在服务器中通过 ejs 结合 mysql 提供的数据进行渲染
        userdb.query('SELECT * FROM users',result=>{
            console.log(result);
            res.render('users',{result:result})
        })

    }
}