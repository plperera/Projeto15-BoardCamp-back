import express from 'express';
import connection from './database/database.js';

import categoriesRoute from "./routes/categoriesRoute.js"
import customersRoute from "./routes/customersRoute.js"
import gamesRoute from "./routes/gamesRoute.js"
import rentalsRoute from "./routes/rentalsRoute.js"

const server = express()

server.use(express.json())

server.use(categoriesRoute)

server.use(customersRoute)

server.use(gamesRoute)

server.use(rentalsRoute)

server.get("/status", (req, res) => {
    res.send("eae status")
})

server.listen(4000, () => console.log("salve console, to escutando a porta: 4000"))