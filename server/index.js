const fs = require('fs')
const cors = require("cors")
const express = require('express')
const server = express()
const port = 3000

/* CORS!? */

server.use(cors());
server.use(express.json())

server.get('/api', (req, res) => {
    res.json("svar från get")
})

server.get("/api/get-all-teams", (req, res) => {
    let rawPkmnTeam = fs.readFileSync("teams.json")
    let pkmnTeam = JSON.parse(rawPkmnTeam)
    res.json(pkmnTeam)
})

server.post("/api/save-team"), (req, res) => {
    try {
        let rawPkmnTeam = fs.readFileSync("teams.json")
        let pkmnTeam = Json.parse(rawPkmnTeam)
        team.push(req.body)
        fs.writeFileSync("teams.json", JSON.stringify(pkmnTeam))
        res.json("team saved")
    } catch(err) {
        console.error(err)
    }
}


server.listen(port, () => console.log("Servern körs, bra jobbat!")) 

