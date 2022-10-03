import express from 'express';
import connection from '../database/database.js';
//import { customersGetMiddleware, customersPostMiddleware, customersPutMiddleware } from '../middleware/customersMiddleware.js';
import { gamesGetMiddleware, gamesPostMiddleware } from '../middleware/gamesMiddleware.js';

const router = express.Router()

router.get('/games', gamesGetMiddleware)
router.post('/games', gamesPostMiddleware)


export default router