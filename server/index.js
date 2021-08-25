const express = require('express')
const server = express()
const port = 3000


server.get('/api', (req, res) => {
    res.send("svar från get")
})

server.listen(port, () => console.log("Servern körs, bra jobbat!")) 

