const express = require('express')
const usersContr = require('../controller/usersContr.js')

let router = express.Router()

router.get('/users',usersContr.getUsers)
    .post('/addUser',usersContr.addUser)
    .get('/getAllUsers',usersContr.getAllUsers)
    .get('/delUser',usersContr.delUser)
    .get('/editUser',usersContr.editUser)
    .post('/updataUser',usersContr.updataUser)
    .post('/delUserById',usersContr.delUserById)
module.exports = router