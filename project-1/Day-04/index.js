const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path') //inbuilt module
const app = express()
const PORT = 1221



app.use(express.static('public')) // 
app.engine('hbs', exphbs({extname : 'hbs'})) //convert handlebars to hbs
app.set('view engine', 'hbs') // engine set to hbs

app.get('/hoverboard', (req,res)=>{
    res.render('main', {layout : 'index'}) 
}) //making routes,   (req,res)-maintain the position/callback functions
app.get('/ticTacToe', (req,res)=>{
    res.sendFile(path.join(__dirname + '/ticTacToe.html'))

})
app.listen(PORT,()=>{
    console.log('server started')
})