import express from 'express';

import { customersGetMiddleware, customersPostMiddleware, customersPutMiddleware } from '../middleware/customersMiddleware.js';
import { customersGetController, customersPostController, customersPutController } from "../controllers/customersController.js"

const router = express.Router()

router.get('/customers', customersGetMiddleware, customersGetController)

router.post('/customers', customersPostMiddleware, customersPostController)

router.put('/customers', customersPutMiddleware, customersPutController)


export default router