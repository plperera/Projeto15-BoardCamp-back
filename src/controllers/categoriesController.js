import connection from "../database/database.js";

async function categoriesGetContoller(req, res){

    try {
        const users = await connection.query('SELECT * FROM categories')
        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }

}
async function categoriesPostContoller(req, res){
    const {name} = req.body

    try {
        const users = await connection.query(`INSERT INTO categories (name) VALUES ($1)`, [name])
        res.send(users.rows)

    } catch (error) {
        console.log(error)
    }
}

export {categoriesGetContoller, categoriesPostContoller}