import fs from "fs"
import { v4 as uuidv4} from "uuid"

export const test = (req, res) => {
    res.json("svar från get")
}
   
export const getAllTeams = (req, res) => {
    let rawPkmnTeam = fs.readFileSync("./teams.json")
    let pkmnTeam = JSON.parse(rawPkmnTeam)
    res.json(pkmnTeam)
}

export const getTeam = (req, res) => {
    try {
        let id = req.params.id
        let rawPkmnTeam = fs.readFileSync("teams.json")
        let pkmnTeam = JSON.parse(rawPkmnTeam)
        let foundTeam = pkmnTeam.find((pkmnTeam) => pkmnTeam.id == id)
        res.json(foundTeam)
    } catch(err) {
        console.log(err)
    }
}

export const saveNewTeam = (req, res) => {
    try {
        let rawPkmnTeam = fs.readFileSync("teams.json")
        let pkmnTeam = JSON.parse(rawPkmnTeam)
        pkmnTeam.push({
            id: uuidv4(),
            name: req.body.name,
            pkmn: req.body.pkmn
        })
        fs.writeFileSync("teams.json", JSON.stringify(pkmnTeam))
        res.status("200").json(req.body)
    } catch(err) {
        console.error(err)
    }
}

export const deleteTeam = (req, res) => {
    try {
        let id = req.params.id
        let rawPkmnTeam = fs.readFileSync("teams.json")
        let pkmnTeam = JSON.parse(rawPkmnTeam)
        pkmnTeam = pkmnTeam.filter((team) => team.id !== id)
        fs.writeFileSync("teams.json", JSON.stringify(pkmnTeam))
        res.status("200").json(req.body)

    } catch (err) {
        console.log(err)
    }
}

export const updateTeam = (req, res) => {
    try {
        let id = req.params.id
        let rawPkmnTeams = fs.readFileSync("teams.json")
        let pkmnTeams = JSON.parse(rawPkmnTeams)
        
        let team = pkmnTeams.find((team) => team.id == id)
        
        req.body.name? team.name = req.body.name : team.name
        req.body.pkmn? team.pkmn = req.body.pkmn : team.pkmn
        
        fs.writeFileSync("teams.json", JSON.stringify(pkmnTeams))
        res.status("200").json(req.body)

    } catch(err) {
        console.log(err)
    }
}