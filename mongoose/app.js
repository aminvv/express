const express = require("express")
const app = express()
 const{ErrorHandel,NotFoundError}=require('./utils/errorHandler')
require('./config/mongoose.config')
 
app.get("/",(req,res)=>{
})



app.listen(3000, () => {
    console.log("server run on port 3000:http://localhost:3000");

})