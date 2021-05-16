const fileUpload = require('express-fileupload')
const express = require('express')
const app = express()
var exphbs  = require('express-handlebars')



app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.use(express.static('images'))

app.use(express.urlencoded({extended: true}))
app.use(fileUpload())


const user = [
    {
        email: 'johnDoe@jasper.info',
        password: '123abc'
    },
    {
        email: 'anagram@jasper.info',
        password: '123abc'
    }
]

app.get('/signUp', (req, res) => {

    console.log(req.headers.cookie)
    res.render('signUp')

})

app.post("/signup", (req, res)=>{
    console.log("Received Request")
    
    let myFile = req.files.avatar
    
    const userName = req.body.name
    const userEmail = req.body.email
    const userPass = req.body.password
    const userImage = req.files.avatar.name

    const data = {
        'name' : userName,
        'email' : userEmail,
        'filename': userImage
    }

    for (let index = 0; index < user.length; index++) {
        const userObj = user[index];

        if (userObj.email === userEmail && userObj.password === userPass) {
            
            // const exprireDate = new Date('2021-04-30')
            // res.cookie('userIdentified', userObj.email, { expires: exprireDate })

            res.redirect('/profile')
            return
        }
        res.redirect('signUp')
    }
    
    console.log(req.files.avatar.name)

    myFile.mv(`./images/${myFile.name}`)
    
    res.render('profile', data)
})


app.get('/login', (req, res) => {
    res.render('login')
})


app.post('/loginProfile', (req,res) => {
    const {name, email, password} = req.body
    console.log(req.body)

    const data = {
        'name' : name,
        'email': email
    }
    
    for (let index = 0; index < user.length; index++) {
        const userObj = user[index];

        if (userObj.email === email && userObj.password === password) {
            
            // const exprireDate = new Date('2021-04-30')
            // res.cookie('userIdentified', userObj.email, { expires: exprireDate })

            res.render('profile', data)
            return
        }
        
    }

    res.redirect('/login')
})


app.get('/profile', (req,res) => {
    console.log(req.headers.cookie)

    if(req.headers.cookie){
    if (req.headers.cookie.includes('userIdentified') === true) {
        
        res.render('profile')
        return
    }}

    res.redirect('/signUp')
    
})



app.post('/profile', (req,res) => {
    const {email, password} = req.body

    res.redirect('/profile')
})


app.listen(3000, () => console.log('Server Started'))
