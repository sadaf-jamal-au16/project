const express = require('express')
const router = express.Router()
const UserModel = require('../models/User')
const bcrypt = require('bcrypt')

router.get('/signUp', (req, res) => {
    res.render('signup',{layout:'sign'})
})


router.post('/signUp', async (req, res) => {

    try {
        const newUserDoc = new UserModel(req.body)
        console.log(newUserDoc)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newUserDoc.password, salt)
        console.log(salt)
        console.log(hashedPassword)
        // const user = {
        //     email: newUserDoc.email ,
        //     password: hashedPassword //coming from db
        // }
        newUserDoc.password = hashedPassword
        const savedUserDoc = await newUserDoc.save()
        console.log(newUserDoc)
        res.redirect('/add/campground')

    } catch (error) {
        console.log(error)
        res.send(`Internal Error Occurred: ${error._message}`)
    }

})


module.exports = router