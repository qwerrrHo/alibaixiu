const catagorydb = require('../model/categorydb.js')

module.exports = {
    categories: (req, res) => {
        res.render('categories', {})
    },
    getAllData: (req, res) => {
        let sql = `SELECT * FROM categories`
        catagorydb.query(sql, (err,result) => {
            if(err){
                return res.send({
                    status:400,
                    msg:'出错啦'
                })
            }
            res.send({
                status:200,
                msg:'获取数据成功',
                data:result
            })
        })
    }
}