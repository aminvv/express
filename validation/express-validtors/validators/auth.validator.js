 const {body}=require("express-validator")
const loginValidator=()=>[
    body("email").isEmail() .trim().withMessage("not valid emails"),
    body("password").isLength({ min:6,max:20}) .trim().withMessage("not valid password"),
]


const registerValidator=()=>[
    body("fullName").isString().isLength({min:3,max:20}).withMessage("fullname is required please enter your fullname"),
    // body("age").isNumeric().withMessage("age must to be  number"),
    body("password").isLength({min:6,max:20}).withMessage("password  must to less than 20 and more  than 6 char"),
    body("email").isEmail().withMessage("email is invalid"),
    body("mobile").isMobilePhone(['fa-IR','en-US']).withMessage("mobile  format is invalid"),
    body("confirmPassword").custom((value,{req})=>{
        const password=req.body.password
        if(value!==password){
            throw Error(" password is not match")
        }
        return true
    }),
    body("age").custom((value)=>{
        if(isNaN(value)){
            throw new Error("age must to be  number");
        }else if(value<=18 || value >=50){
            throw Error("age Between 18-50")
        }
        return true
    }),
]




module.exports={
    loginValidator,
    registerValidator
}