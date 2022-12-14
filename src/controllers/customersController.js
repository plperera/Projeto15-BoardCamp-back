import connection from "../database/database.js";

async function customersGetController(req, res){

    try {
        if (req.query.name === undefined) {

            const users = await connection.query(`
            SELECT *
                FROM customers; 
            `)
    
            res.send(users.rows)  

        } else {

            const users2 = await connection.query(`
            SELECT *
                FROM customers '%$1%'; 
            `, [req.query.cpf])
    
            res.send(users2.cpf)   
        }
        
    } catch (error) {
        console.log(error)
    } 
}
async function customersPostController(req, res){

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
async function customersPutController(req, res){
    const {name, phone, cpf, birthday} = req.body
 
    try {



    } catch (error) {
        console.log(error)
    }
}

export {customersGetController, customersPostController, customersPutController}