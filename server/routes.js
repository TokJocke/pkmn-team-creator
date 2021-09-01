import express from "express"
import {test, getAllTeams, saveNewTeam, deleteTeam, getTeam, updateTeam} from "./controllers.js"

const routes = express.Router();

routes.get("/", test)
routes.get("/get-all-teams", getAllTeams)
routes.get("/get-team/:id", getTeam)
routes.post("/save-new-team", saveNewTeam)
routes.delete("/delete-team/:id", deleteTeam)
routes.put("/update-team/:id", updateTeam)

export default routes