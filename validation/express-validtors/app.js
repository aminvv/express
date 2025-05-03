const {ErrorHandler,NotfoundError}=require('./error-handler')
const express=require('express');
const app=express()



app.get((req,res)=>{
console.log(req.body);
res.send(req.body)

})

app.use(NotfoundError)
app.use(ErrorHandler)
app.listen(3000,()=>{
   console.log('http://localhost:3000');
})