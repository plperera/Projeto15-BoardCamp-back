import connection from '../database/database.js';
//import schema

async function gamesGetMiddleware (req, res, next){

    next()
}
async function gamesPostMiddleware (req, res, next){

    const {name, stockTotal, pricePerDay, categoryId} = req.body

    try {

        const hasCategory = await connection.query(`SELECT * FROM categories WHERE id=$1;`, [categoryId])
        const hasName = await connection.query(`SELECT * FROM games WHERE name=$1;`, [name])

        if (name === "" || stockTotal <= 0 || pricePerDay <= 0 || hasCategory.rows.length === 0){
            return res.sendStatus(400)
        }else if (hasName.rows.length !== 0 ){
            return res.sendStatus(409)
        } else {
            next()
        }
        
    } catch (error) {
        console.log(error)
    }
}


export {gamesGetMiddleware, gamesPostMiddleware}