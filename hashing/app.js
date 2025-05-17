


const crypto = require('crypto')



function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex')
    const hashed = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
    const newHashed = `$2s.${salt}.${hashed}`
    return newHashed
}


function verifyHashPassword(password,hashPassword) {
    const salt = hashPassword.split(".")?.[1]
    const hashed = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
    const newHashed = `$2s.${salt}.${hashed}`
    return (hashPassword ==newHashed)
}

const hashed=hashPassword('123456')
const result=verifyHashPassword('123456',hashed)
console.log(result);