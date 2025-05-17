


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






//  create hashed ------  2



const hashed_two=crypto.createHash('sha512',{encoding:"utf-8"}).update('123456').digest('hex')
console.log('hashed :2',hashed_two);



//  create hashed ------  3


// const secret="sdjfhjhadsghgfjkljadskljhfgjkadshjfhjadsh"
// or
const secret=crypto.randomBytes(16).toString('hex')
const hashed_three=crypto.createHmac('sha512',secret).update('123456').digest('hex')
console.log('hashed :3',hashed_three); 