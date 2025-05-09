 const express=require("express")
 const multer=require("multer")
 const app=express()
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
const uploadFile=multer({dest:'uploads/'})

app.post('/upload',uploadFile.single('image'),(req,res)=>{
     console.log(req.body);
     res.send(req.file)
})
app.listen(3000,()=>{
    console.log('http://localhost:3000');
})




