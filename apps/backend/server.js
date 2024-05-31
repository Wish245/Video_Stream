const bodyParser = require('body-parser')
const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req,res)=>{
    req.sendFile(__dirname + '/frontend/index.html')
})
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/frontend/login.html')
})

app.post('/login', (req,res) =>{
    let username = req.body.username
    let password = req.body.password
    res.send(`Username: ${username} Password: ${password}`)
})
const port = 8089
app.listen(port, ()=> console.log(`This app is listening on port ${port}`))