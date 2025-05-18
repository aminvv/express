const express=require('express')
const {AllRouters}=require('./router/index.routes')
const {ErrorHandler,ErrorNotFound}=require('./utils/error.handling')
const { default: mongoose } = require('mongoose')
const app=express()


mongoose.connect('mongodb://localhost:27017/authorization',{}).then(()=>{
    console.log('connect to mongodb');}).catch((err)=>{console.log(err.message);})


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(AllRouters)



app.use(ErrorHandler) 
app.use(ErrorNotFound)
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})
