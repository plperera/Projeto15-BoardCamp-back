import connection from "../database/database";

async function rentalsGetController(req, res){

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
}
async function rentalsPostController(req, res){
    
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
}

export {rentalsGetController, rentalsPostController}