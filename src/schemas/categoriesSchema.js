import joi from 'joi'

const categoriesSCHEMA = joi.object({
    name: joi.string().required(),
})

export {categoriesSCHEMA}