const { param, query } = require("express-validator");

const  QueryValidator=()=>[
     query("title").isEmpty().isString().matches(/[a-z0-9]*/gim),
     query("sort").isEmpty().matches(/ASC|DESC/),

]

module.exports={
    QueryValidator
}