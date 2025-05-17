


const crypto = require('crypto')



function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex')
    const hashed = crypto.pbkdf2Sync('123456', salt, 1000, 64, 'sha512').toString('hex')
    const newHashed = `$2s.${salt}.${hashed}`
    return newHashed
}