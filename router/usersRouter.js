const express = require('express')
const usersContr = require('../controller/usersContr.js')

let router = express.Router()

router.get('/users',(req,res)=>{
    usersContr.getUsers(req,res)
})

module.exports = router