import express from 'express';

import { gamesGetMiddleware, gamesPostMiddleware } from '../middleware/gamesMiddleware.js';

const router = express.Router()

router.get('/games', gamesGetMiddleware)
router.post('/games', gamesPostMiddleware)


export default router