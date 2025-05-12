const express = require("express")
const uploadFile = require("./middleware/multer")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const{ErrorHandler,NotfoundError}=require('./utils/error-handler')

app.post('/upload', uploadFile.array('image',2), (req, res) => {
    console.log(req.files.size);
    res.send(req.files)
})

app.use(ErrorHandler)
app.use(NotfoundError)
app.listen(3000, () => {
    console.log('http://localhost:3000');
})




