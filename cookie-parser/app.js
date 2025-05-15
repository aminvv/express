


const express=require('express')
const cookieParser=require('cookie-parser')
const app=express()

app.use(cookieParser())


app.get('/set-cookie',(req,res)=>{
    res.cookie('cookie--name','cookie--value')
    res.send('cookie set successfully')
})
app.get('/get-cookie',(req,res)=>{
    res.send(req.cookies)
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})