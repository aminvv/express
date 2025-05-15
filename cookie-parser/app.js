


const express=require('express')
const cookieParser=require('cookie-parser')
const app=express()

app.use(cookieParser('jsdhfhkjdgsfkhjghjgajfhkljadhsjhfjhckjghadfjkshgjklads'))


app.get('/set-cookie',(req,res)=>{
    res.cookie('cookie--name','cookie--value----nodejs',{
        expires: new Date(new Date().getTime()+ 5000)
    })
    res.cookie('cookie--python','cookie--value----python',{
        maxAge:5000,
        httpOnly:true,
        signed:true,
        secure:true,
        sameSite:'lax',// lax -strict- none
    })
    res.send('cookie set successfully')
})
app.get('/get-cookie',(req,res)=>{
    res.send(req.cookies.name)
})

app.get('/clear-cookie',(req,res)=>{
    res.clearCookie("cookie--name")
    res.send('clear cookie successfully')
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})