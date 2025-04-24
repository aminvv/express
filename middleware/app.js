 const express=require("express")
 const app=express()



 const auth=(req,res,next)=>{
    const {username,password}=req.query
    if(username =="amin" && password==12345){
        return next()
    }
    res.send( "authentication is failed")
 }


 app.get("/middle",auth,(req,res)=>{
    res.send("user")
 })


 app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
 })