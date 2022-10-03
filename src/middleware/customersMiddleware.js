import connection from '../database/database.js';
import customersSCHEMA from '../schemas/customersSchema.js'
//import schema

async function customersGetMiddleware (req, res, next){
    next()
}
async function customersPostMiddleware (req, res, next){

    const isValid = customersSCHEMA.validate(req.body, {abortEarlt: false})

    if (isValid.error){
        return res.status(400).send(isValid.error.message)
    }
    try {
        const hasUser = await connection.query(`SELECT * FROM customers WHERE cpf=$1`, [req.body.cpf])
        if(hasUser.rows.length !== 0){
            return res.sendStatus(409)
        }
        else {
            next()
        }
    } catch (error) {
        console.log(error)
    }
    
}
async function customersPutMiddleware (req, res, next){
    next()
}

export {customersGetMiddleware, customersPostMiddleware, customersPutMiddleware}