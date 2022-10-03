import connection from '../database/database.js';
//import schema

async function categoriesPostMiddleware (req, res, next){
    const {name} = req.body

    try {
        const users = await connection.query(`INSERT INTO categories (name) VALUES ($1)`, [name])
        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }
}

async function categoriesGetMiddleware (req, res, next){
    
    try {
        const users = await connection.query('SELECT * FROM categories')
        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }
}

export {categoriesGetMiddleware, categoriesPostMiddleware}