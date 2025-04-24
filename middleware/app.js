 const express=require("express")
 const app=express()
 const morgan=require("morgan")

app.use(morgan('combined'))
app.use(morgan('common'))
app.use(morgan('dev'))
app.use(morgan('short'))
app.use(morgan('tiny'))
app.use(morgan('method: url: :status :res[Content-length]  :response-time ms'))

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