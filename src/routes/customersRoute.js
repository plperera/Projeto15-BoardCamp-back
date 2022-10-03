import express from 'express';

import { customersGetMiddleware, customersPostMiddleware, customersPutMiddleware } from '../middleware/customersMiddleware.js';

const router = express.Router()

router.get('/customers', customersGetMiddleware)

router.post('/customers', customersPostMiddleware)

router.put('/customers', customersPutMiddleware)


export default router