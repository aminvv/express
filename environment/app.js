


const express=require('express')
const path=require('path')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
const NODE_ENV=process.env.NODE_ENV
dotenv.config({
    path:path.join(__dirname,`.env.${NODE_ENV}`)
})

const  PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})  