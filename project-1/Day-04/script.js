  
const fs = require('fs')
let posts = require('./database/posts.json')
const express = require('express')
const app = express()
app.use(express.json())
app.get('/users', (req, res) => {
    res.send(posts)
})

app.get("/users/:id", (req, res) => {
    let {id} = req.params
    flag = true

    for (i=0; i < posts.length; i++) {
        if (id == posts[i].id) {
            res.send(posts[i])
            flag = false
            break
        }
    }
    if (flag) {
        res.send({})
    }
})

app.post('/users', (req, res) => {
    if (req.body.title && req.body.body && Object.keys(req.body).length == 2) {
        res.json({success:true})
        const newuser = {userId: Math.floor(posts.length/10) + 1,id: posts.length + 1,title:req.body.title, body: req.body.body}
        posts.push(newuser)
        fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 2))
    }
    else{
        res.json({success:false})
    }
})

app.put('/users/:id', (req, res) => {
    let {id} = req.params
    flag = true
    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id == id) {
            if (req.body.title && req.body.body && Object.keys(req.body).length == 2) {
                res.json({success:true})
                posts[i].title = req.body.title
                posts[i].body = req.body.body
                fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 2))
                break
        
            }
            else{
                res.json({success:false})
            }
            flag = false
            break
        }
    }
    if (flag) {
        res.json({success:false})
    }
})

app.delete('/users/:id', (req, res) => {
    let {id} = req.params
    flag = true
    for (let i = 0; i <posts.length; i++) {
        if (posts[i].id == id) {
            res.json({success:true})
            posts = posts.filter(function(item) {
                if (item.id != id) {
                    return item
                }
            })
            for (i = 0; i < posts.length; i++) {
                posts[i].id = i + 1
                posts[i].userId = Math.floor(i/10) + 1
            }

            fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 2))
            flag = false
            break
        }
    }
    if (flag) {
        res.json({success:false})
    }
})

app.listen(5000)