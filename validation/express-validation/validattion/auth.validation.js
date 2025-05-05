
const { Joi } = require("express-validation")

function authValidation() {
    return {
        body: Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(20).required().regex(/[a-z]/)
        })
    }
}



module.exports = {
    authValidation
}