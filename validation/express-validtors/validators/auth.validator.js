 const {body}=require("express-validator")
const loginValidator=()=>[
    body("email").isEmail() .trim().withMessage("not valid emails"),
    body("password").isLength({ min:6,max:20}) .trim().withMessage("not valid password"),
]

module.exports={
    loginValidator
}