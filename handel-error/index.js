 const express=require('express')
 const app=express()
 
 app.get('/',(req,res)=>{
    res.send(req.url)
 })
 
 
 app.get('/error/:number', (req, res,next) => {
try {
    let number=req.params.number

    if(number ==2)throw ({status:400,message:" number is not equal =2"});
    if(number ==3)throw ({status:400,message:" number is not equal =3"});
    if(number ==4)throw ({status:400,message:" number is not equal =4"});
    res.send("index address")
} catch (error) {
    next(error)
}
 });





app.use((req,res)=>{
return res.status(404).json({
    statusCode:res.statusCode,
    error:{
        type:'NotFound',
        message:"notfound " + req.url+"  router"
    }
})
})







app.use((error,req,res,next)=>{
     return res.json({
        statusCode:error.status ||500,
        error:{
            message:(error.message || "internal server error")
        }
     })
})


 app.listen(3000,()=>{
    console.log('http://localhost:3000');
 })