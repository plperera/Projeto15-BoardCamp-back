import express from 'express';

import { rentalsGetMiddleware, rentalsPostMiddleware } from '../middleware/rentalsMiddleware.js';

const router = express.Router()

router.get('/rentals', rentalsGetMiddleware)

router.post('/rentals', rentalsPostMiddleware)

export default router