/* const fs = require('fs')
const cors = require("cors")
const express = require('express') 
const routes = require("./routes.js") 
import fs from "fs"
*/

import cors from "cors"
import express from "express"
import routes from "./routes.js"
const server = express()
const port = 3000

/* CORS!? */

server.use(cors());
server.use(express.json())
server.use("/api", routes)


server.listen(port, () => console.log("Servern körs, bra jobbat!")) 

