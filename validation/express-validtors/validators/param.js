const { param } = require("express-validator");

const  idValidator=()=>[
     param("id").isMongoId().withMessage("invalid objectId"),

]

module.exports={
    idValidator
}