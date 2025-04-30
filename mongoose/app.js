const express = require("express")
const app = express()
const { ErrorHandel, NotFoundError } = require('./utils/errorHandler')
require('./config/mongoose.config')
const { blogModel } = require('./model/blog.model')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post("/create", async (req, res) => {
    const { title, text } = req.body
    const result = await blogModel.create({
        title, text
    })
    res.send(result)
})


app.post("/new", async (req, res) => {
    const { title, text } = req.body
    const newBlog = new  blogModel({
        title, text
    })
    await newBlog.save()
    res.send(newBlog)
})


app.post("/insert-many", async (req, res) => {
    const newBlog = await blogModel.insertMany([
        {
            title:"dsfadfffffffffffffffdsddddddsf",
            text:"fafsdghdjksghdfjkh"
        },
        {
            title:"dsfarsdetrsdtfdfstgfsdgfffffffffffffffffffffffffffffffsf",
            text:"fafsdghdjksghdfjkh"
        },
        {
            title:"dsfafffffhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkdsf",
            text:"fafsdghdjksghdfjkh"
        },
    ])
    res.send(newBlog)
})


app.use(ErrorHandel)
app.use(NotFoundError)
app.listen(3000, () => {
    console.log("server run on port 3000:http://localhost:3000");

})