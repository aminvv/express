const express = require("express")
const uploadFile = require("express-fileupload")
const fs = require("fs")
const path = require("path")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(uploadFile())
const{ErrorHandler,NotfoundError}=require('./utils/error-handler')

app.post('/upload-buffer',(req, res) => {
    const image =req.files.image
    const ext=path.extname(image.name)
       fs.mkdirSync('public/upload', { recursive: true })
    const destPath=path.join(__dirname,"public",'upload',Date.now() +ext)
     const buffer=Buffer.from(image.data)
     fs.writeFileSync(destPath,buffer)
    res.send(req.files)
})
app.post('/upload-mv',async(req, res) => {
    if (!req.files || Object.keys(req.files).length==0) {
        throw {status:400,message:" no file were upload !"}
    }
    for(const key in req.files){
        let file=req.files[key]
    const ext=path.extname(file.name)
       fs.mkdirSync('public/upload', { recursive: true })
    const destPath=path.join(__dirname,"public",'upload',Date.now() +ext)
        const result=await new Promise((resolve,reject)=>{
                file.mv(destPath,(error)=>{
        if(error) reject(error)
            else{
                resolve(" uploaded successfully")
            }
    })
        })
    }
    res.send(req.files )
})

app.use(ErrorHandler)
app.use(NotfoundError)
app.listen(3000, () => {
    console.log('http://localhost:3000');
})




