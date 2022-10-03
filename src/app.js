import express from 'express';
import connection from './database/database.js';
import categoriesRoute from "./routes/categoriesRoute.js"


const server = express()

server.use(express.json())

server.use(categoriesRoute)
server.get('/games', async (req, res) => {
 
    try {

        const users = await connection.query(`
        SELECT games.id, games.name, games.image, games."stockTotal", games."categoryId" , games."pricePerDay", categories.name as "categoryName"
            FROM games 
                JOIN categories ON games."categoryId" = categories.id;
        `)

        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }

})
server.post('/games', async (req, res) => {

    const {name, image, stockTotal, categoryId, pricePerDay} = req.body
 
    try {
        
        const users = await connection.query(`
        INSERT INTO games 
        (name, image, "stockTotal", "categoryId", "pricePerDay") 
        VALUES ($1, $2, $3, $4, $5)
        `, [name, image, stockTotal, categoryId, pricePerDay])

        res.send(users.rows)
        //`INSERT INTO games (name, image, "stockTotal", "categoryId", "pricePerDay") VALUES ('Banco Imobiliário', 'imagem top', '3', '1', '1500')`

    } catch (error) {
        console.log(error)
    }

})


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