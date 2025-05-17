
const jwt = require('jsonwebtoken')
const fs = require('fs')
const privateKey=fs.readFileSync('./privateKey.key')

const tokenHS512 = jwt.sign({ id: 'sayMyname', email: 'amin@gmail.com' },
    "dskfhdskljahg;adlshfdslijuhksdf;lkjkljDSSFL:k",
    {
        expiresIn: '1h',
        algorithm: 'HS512'
    }
)
console.log('TOKEN HS512=========>>>>>>',tokenHS512);




const tokenRS512 = jwt.sign({ id: 'sayMyname', email: 'amin@gmail.com' },
    privateKey,
    {
        expiresIn: '1h',
        algorithm: 'RS512'
    }
)

console.log('TOKEN RS512=========>>>>>>',tokenRS512);