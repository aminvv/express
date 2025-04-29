 const {ErrorHandler,NotfoundError}=require('./error-handler')
 const express=require('express');
 const app=express()
app.use(express.static("public"))
app.set("view engine","ejs")



app.get("/",(req,res)=>{
    const blogs=require('./blogs.json')
    res.render("index",{
        blogs
    })
})


app.use(NotfoundError)
app.use(ErrorHandler)
 app.listen(3000,()=>{
    console.log('http://localhost:3000');
 }) 