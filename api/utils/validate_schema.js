import joi  from "joi"

const validateSchema = joi.object({
    name:joi.string(),
    email:joi.string().email().required(),
    password:joi.string().min(6).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))

})

export default validateSchema