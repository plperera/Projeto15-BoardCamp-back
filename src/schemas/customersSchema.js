import joi from 'joi'

const customersSCHEMA = joi.object({
    name:joi.required(),
    cpf: joi.string().min(11).max(11).required(),
    phone: joi.string().min(10).max(11).required(),
    birthday: joi.date().format('YYYY-MM-DD'),
})

export {customersSCHEMA}