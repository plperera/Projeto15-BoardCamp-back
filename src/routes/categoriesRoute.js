import express from 'express';

import { categoriesGetMiddleware, categoriesPostMiddleware } from '../middleware/categoriesMiddleware.js';
import {categoriesGetContoller, categoriesPostContoller} from "../controllers/categoriesController.js"

const router = express.Router()

router.get('/categories', categoriesGetMiddleware, categoriesGetContoller)

router.post('/categories', categoriesPostMiddleware, categoriesPostContoller)

export default router