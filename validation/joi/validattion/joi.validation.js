
const Joi = require("joi");

function loginValidationSchema() {
    return  Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(20).required().regex(/[a-z]/)
        })
    
}


function registerValidationSchema(){
return Joi.object({
        email:Joi.string().email().required(),
        password: Joi.string().min(6).max(20).required().regex(/[a-z]/),
        confirmPassword:Joi.ref("password"),
        age:Joi.number().integer().min(18).max(50).required(),
     })

}



module.exports = {
    loginValidationSchema,
    registerValidationSchema
}