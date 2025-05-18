
const jwt = require('jsonwebtoken')
const fs = require('fs')
const privateKey=fs.readFileSync('./privateKey.key')

const tokenHS512 = jwt.sign({ id: 'sayMyname', email: 'amin@gmail.com' },
    "dskfhdskljahg;adlshfdslijuhksdf;lkjkljDSSFL:k",
    {
        expiresIn: '20s',
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

console.log('TOKEN RS512=========>>>>>>',tokenRS512 );




// -----------------------------------------------------------------------------------------------------------------verify
// Important------>>>>>>*****    expires -- secret

setTimeout(()=>{
try {
        const tokenVerify = jwt.verify(tokenHS512,"dskfhdskljahg;adlshfdslijuhksdf;lkjkljDSSFL:k")

console.log('TOKEN verify =========>>>>>>',tokenVerify );
} catch (error) {
    console.log(error);
}
},3000)
 

// ======= decode
// not Important ----->>>>>>******** expires --- secret 
setTimeout(()=>{
    const tokenDecode = jwt.decode(tokenHS512,)

console.log('TOKEN decode =========>>>>>>',tokenDecode );
},)
 




// basic ------------------------------------------------------------------------------------



const usernamePassword='aminasadi/123456'
const basic64Data=Buffer.from(usernamePassword).toString('base64')
const decodeData=Buffer.from(basic64Data,'base64').toString('ascii')
const [username,password]=decodeData.split('/')
console.log(username,password);