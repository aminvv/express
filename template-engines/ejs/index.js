 const {ErrorHandler,NotfoundError}=require('./error-handler')
 const express=require('express');
 const app=express()


 users=[
    {
        id:1,
        username:"amin"
    },
    {
        id:2,
        username:"ali"
    },
    {
        id:3,
        username:"vahid"
    },
]




app.use(NotfoundError)
app.use(ErrorHandler)
 app.listen(3000,()=>{
    console.log('http://localhost:3000');
 })