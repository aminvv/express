const { userModel } = require("../model/user")
const { hashPassword } = require("../utils/auth.util")


async function register(req, res, next) {
    try {
        const { fullName, email, password } = req.body
        const user = await userModel.create({
            fullName,
            email,
            password:hashPassword(password)
        })
        res.send(user)
    } catch (error) {
        next(error)
    }
}



function login(req, res) {
    res.send(" login successfully")
}


module.exports = {
    register,
    login
}