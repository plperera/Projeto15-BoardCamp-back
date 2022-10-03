import connection from "../database/database.js";

async function gamesGetController(req, res){
    
    try {
        if (req.query.name === undefined) {

            const users = await connection.query(`
            SELECT games.id, games.name, games.image, games."stockTotal", games."categoryId" , games."pricePerDay", categories.name as "categoryName"
                FROM games 
                    JOIN categories ON games."categoryId" = categories.id;
            `)
    
            res.send(users.rows)  

        } else {

            const users2 = await connection.query(`
            SELECT games.id, games.name, games.image, games."stockTotal", games."categoryId" , games."pricePerDay", categories.name as "categoryName"
                FROM games 
                    JOIN categories ON games."categoryId" = categories.id WHERE games.name=$1;
            `,[req.query.name])
    
            res.send(users2.rows)   
        }
        
    } catch (error) {
        console.log(error)
    }
    
    try {
        

    } catch (error) {
        
    }
    
}
async function gamesPostController(req, res){

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

}

export {gamesGetController, gamesPostController}