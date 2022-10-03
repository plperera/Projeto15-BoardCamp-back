import express from 'express';

import { gamesGetMiddleware, gamesPostMiddleware } from '../middleware/gamesMiddleware.js';
import { gamesGetController, gamesPostController } from "../controllers/gamesController.js"

const router = express.Router()

router.get('/games', gamesGetMiddleware, gamesGetController)
router.post('/games', gamesPostMiddleware, gamesPostController)


export default router