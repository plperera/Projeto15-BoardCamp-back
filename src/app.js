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






server.get('/rentals', async (req, res) => {

    const {name, phone, cpf, birthday} = req.body
 
    try {

        const users = await connection.query(`
        SELECT * 
            FROM rentals 
                JOIN customers ON rentals."customerId" = customers.id
                JOIN games ON rentals."gameId" = games.id;
        `)

        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }

})

server.post('/rentals', async (req, res) => {

    const {customerId, gameId, daysRented} = req.body
    const rentDate = "03/10/2022 data da inserção"
    const returnDate = null
    const originalPrice = daysRented * "preco do dia"
    const delayFee = null
    try {

        const users = await connection.query(`
        INSERT INTO rentals 
        (customerId, gameId, daysRented) 
        VALUES ($1, $2, $3, $4)
        `, [customerId, gameId, daysRented])

        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }

})
server.get("/status", (req, res) => {
    res.send("eae status")
})

server.listen(4000, () => console.log("salve console, to escutando a porta: 4000"))