import connection from '../database/database.js';
//import schema

async function customersGetMiddleware (req, res, next){
    next()
}
async function customersPostMiddleware (req, res, next){
    next()
}
async function customersPutMiddleware (req, res, next){
    next()
}

export {customersGetMiddleware, customersPostMiddleware, customersPutMiddleware}