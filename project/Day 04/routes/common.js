const express = require('express')
const common_router = express.Router()

common_router.get('/', async (req, res) => {
    res.render('home')
})

module.exports = common_router