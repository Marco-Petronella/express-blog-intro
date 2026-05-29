const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log("server running and listening on ${port}");
})

app.get("/", (req,res) => {
    res.send("hello, your server is online!")
})