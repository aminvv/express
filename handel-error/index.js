 const express=require('express')
 const app=express()
 


 app.get('/',(req,res)=>{
    res.send(req.url)
 })





app.use((req,res)=>{
return res.status(404).json({
    statusCode:res.statusCode,
    error:{
        type:'NotFound',
        message:"notfound " + req.url+"  router"
    }
})
})
 app.listen(3000,()=>{
    console.log('http://localhost:3000');
 })