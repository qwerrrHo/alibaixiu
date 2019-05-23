const express = require('express')
const categoryContr = require('../controller/categoryContr.js')
let router = express.Router()

router.get('/categories',categoryContr.categories)
    .get('/getAllData',categoryContr.getAllData)
module.exports = router