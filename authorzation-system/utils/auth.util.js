const { genSaltSync, hashSync, compareSync } = require("bcrypt")
const jwt = require("jsonwebtoken")

const secret='$10$.5QrTE1wGq6/5R/uNXkJU.c0.eb6SwnAo0I9ZNzEIiTeDAiphGa4i'

function hashPassword(password) {
const salt=genSaltSync(10)
return hashSync(password,salt)
}


function comparePassword(password,hashPassword) {
return compareSync(password,hashPassword)
}


function comparePassword(password,hashPassword) {
return compareSync(password,hashPassword)
}

function signToken(payload) {
 return jwt.sign(payload,secret)
}


function verifyToken(token) {
return token=jwt.verify(token,secret)

}




module.exports={
    hashPassword,
    comparePassword,
    signToken,
    verifyToken
}