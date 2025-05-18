const { userModel } = require("../model/user")
const { hashPassword, signToken } = require("../utils/auth.util")


async function getProfile(req, res, next) {
    try {
        console.log(req.user);
         return res.send(req.user)

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getProfile,
    
}