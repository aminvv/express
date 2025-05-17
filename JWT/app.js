
const jwt=require('jsonwebtoken')

const token=jwt.sign({id:'sayMyname',email:'amin@gmail.com'},
    "dskfhdskljahg;adlshfdslijuhksdf;lkjkljDSSFL:k",
    {expiresIn:'1h'}
)

console.log(token);