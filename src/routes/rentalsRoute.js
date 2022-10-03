import express from 'express';
import connection from '../database/database.js';

import { rentalsGetMiddleware, rentalsPostMiddleware } from '../middleware/rentalsMiddleware.js';

const router = express.Router()

router.get('/rentals', rentalsGetMiddleware)

router.post('/rentals', rentalsPostMiddleware)

export default router