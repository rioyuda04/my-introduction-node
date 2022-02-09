// call package express
const express = require('express')

// use package express
const app = express()

// set endpoint
app.get('/', function (req, res) {
    res.send("HELLO THIS IS MY SITE")
})

// configuration port app
const port = 5000
app.listen(port, function(){
    console.log('server running')
})