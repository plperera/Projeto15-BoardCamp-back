import express from 'express';

import { rentalsGetMiddleware, rentalsPostMiddleware } from '../middleware/rentalsMiddleware.js';
import { rentalsGetController, rentalsPostController } from '../controllers/rentalsContoller.js'

const router = express.Router()

router.get('/rentals', rentalsGetMiddleware, rentalsGetController)

router.post('/rentals', rentalsPostMiddleware, rentalsPostController)

export default router