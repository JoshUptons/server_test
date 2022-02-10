const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send(JSON.stringify({"message": "hello world"}))
})

app.get("/ping", (req, res) => {
    res.send(JSON.stringify({"message": "pong"}))
})

app.listen(port, function() {
    console.log("app listening on port " + port)
})