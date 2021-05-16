const express = require('express')
const router = express.Router()
const campdataModel = require('../models/campgrounds')

router.use(express.static('public'))
router.get('/campground',(req,res)=>{
    res.render('camp',{layout:'second'})
})

router.get('/campground/new',(req,res)=>{
     res.render('add_campground',{layout:'last'})
})

router.post('/campground/new',async (req,res)=>{
    try {
        const newCampdoc = new campdataModel(req.body)

        const saveCampDoc = await newCampdoc.save()

        res.redirect('/add/campground')

    } catch (error) {
        res.send(`Internal Error Occurred: ${error._message}`)
    }
})


module.exports = router