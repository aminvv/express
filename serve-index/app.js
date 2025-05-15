

const express=require('express')
const serveIndex = require('serve-index')
const path = require('path')
const app=express()


app.use('/ftp', express.static(path.join(__dirname, 'public/ftp')));
app.use('/ftp', serveIndex(path.join(__dirname, 'public/ftp'), { icons: true }));


app.get('/',(req,res)=>{
    res.send(req.url)
})

app.listen(3000,()=>{
    console.log('http://localhost:3000');
})