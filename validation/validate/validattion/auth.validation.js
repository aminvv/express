const { required } = require('joi')
const Validate = require('validate')

function loginValidateSchema() {
    return new Validate({
        username: { type: String, required: true,message:{required:"ms1",type:"msf 2"} },
        email: { type: String, required: true, match: /^[a-z0-9_.]{5,50}@[a-z]{5,10}\.[a-z]{2,10}$/i },
    })

}


function registerValidationSchema() {
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(20).required().regex(/[a-z]/),
        confirmPassword: Joi.ref("password"),
        age: Joi.number().integer().min(18).max(50).required(),
    })

}



module.exports = {
    loginValidateSchema,
    registerValidationSchema
}