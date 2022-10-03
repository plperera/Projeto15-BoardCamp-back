import connection from '../database/database.js';
import { categoriesSCHEMA } from '../schemas/categoriesSchema.js'

async function categoriesPostMiddleware (req, res, next){

    const isValid = categoriesSCHEMA.validate(req.body, {abortEarlt: false})

    if (isValid.error){
        return res.status(400).send(isValid.error.message)
    }

    const {name} = req.body

    
    try {

        const hasCategory = await connection.query(`SELECT * FROM categories WHERE name=$1;`, [name])

        if (hasCategory.rows.length !== 0){
            return res.sendStatus(409)
        } else {
            next()
        }

    } catch (error) {
        console.log(error)
    }
}

async function categoriesGetMiddleware (req, res, next){ 
    next()   
}

export {categoriesGetMiddleware, categoriesPostMiddleware}