


const express=require('express')
const cookieParser=require('cookie-parser')
const app=express()

app.use(cookieParser())


app.get('/set-cookie',(req,res)=>{
    res.cookie('cookie--nodejs','cookie--value----nodejs',{
        expires: new Date(new Date().getTime()+ 5000)
    })
    res.cookie('cookie--python','cookie--value----python',{
        maxAge:5000,
    })
    res.send('cookie set successfully')
})
app.get('/get-cookie',(req,res)=>{
    res.send(req.cookies)
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})