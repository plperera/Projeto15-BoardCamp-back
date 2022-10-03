import connection from '../database/database.js';
//import schema

async function customersGetMiddleware (req, res, next){

    try {

        const users = await connection.query(`
        SELECT * FROM customers`)

        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }
}
async function customersPostMiddleware (req, res, next){

    const {name, phone, cpf, birthday} = req.body
 
    try {

        const users = await connection.query(`
        INSERT INTO customers 
        (name, phone, cpf, birthday) 
        VALUES ($1, $2, $3, $4)
        `, [name, phone, cpf, birthday])

        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }
}
async function customersPutMiddleware (req, res, next){
    const {name, phone, cpf, birthday} = req.body
 
    try {



    } catch (error) {
        console.log(error)
    }
}

export {customersGetMiddleware, customersPostMiddleware, customersPutMiddleware}