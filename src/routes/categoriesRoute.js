import express from 'express';
import { categoriesGetMiddleware, categoriesPostMiddleware } from '../middleware/categoriesMiddleware.js';

const router = express.Router()

router.get('/categories', categoriesGetMiddleware)

router.post('/categories', categoriesPostMiddleware)

export default router