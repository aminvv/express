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

app.post('/upload',(req, res) => {
    const image =req.files.image
    const ext=path.extname(image.name)
       fs.mkdirSync('public/upload', { recursive: true })
    const destPath=path.join(__dirname,"public",'upload',Date.now() +ext)
     const buffer=Buffer.from(image.data)
     fs.writeFileSync(destPath,buffer)
    res.send(req.files)
})

app.use(ErrorHandler)
app.use(NotfoundError)
app.listen(3000, () => {
    console.log('http://localhost:3000');
})




