 const {ErrorHandler,NotfoundError}=require('./error-handler')
 const express=require('express');
const { link } = require('fs');
 const app=express()
 const path=require("path")
 app.use('/static', express.static('public'));
 app.set("view engine","pug")
 app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render("index",{
        link:"http://botostart.ir",
        section:"this is my section"
    })
})

app.use(NotfoundError)
app.use(ErrorHandler)
 app.listen(3000,()=>{
    console.log('http://localhost:3000');
 })