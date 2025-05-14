const express=require('express');
const { allRouter } = require('./router');
const app=express()
app.use(allRouter)


app.listen(3000,()=>{
    console.log("http://localhost:3000  run server on port 3000" );
})