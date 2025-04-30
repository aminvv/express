const express = require("express")
const app = express()
const { ErrorHandel, NotFoundError } = require('./utils/errorHandler')
require('./config/mongoose.config')
const { blogModel } = require('./model/blog.model')
const { isValidObjectId } = require("mongoose")
const omitEmpty = require("omit-empty")
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
    const newBlog = new blogModel({
        title, text
    })
    await newBlog.save()
    res.send(newBlog)
})


app.delete("/insert-many", async (req, res) => {
    const newBlog = await blogModel.insertMany([
        {
            title: "dsfadfffffffffffffffdsddddddsf",
            text: "fafsdghdjksghdfjkh"
        },
        {
            title: "dsfarsdetrsdtfdfstgfsdgfffffffffffffffffffffffffffffffsf",
            text: "fafsdghdjksghdfjkh"
        },
        {
            title: "dsfafffffhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkdsf",
            text: "fafsdghdjksghdfjkh"
        },
    ])
    res.send(newBlog)
})



app.get("/find", async (req, res) => {
    const newBlog = await blogModel.find()
    res.send(newBlog)
})

app.get("/find-one/:id", async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) throw { status: 400, message: "your id is not valid id" }
    const Blog = await blogModel.findOne({ _id: id })
    res.send(Blog)
})
app.delete("/delete-one/:id", async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) throw { status: 400, message: "your id is not valid id" }
    const result = await blogModel.deleteOne({ _id: id })
    res.send(result)
})
app.delete("/delete-many", async (req, res) => {
    const result = await blogModel.deleteMany()
    res.send(result)
})



app.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    const newBodyObject = omitEmpty(req.body)
    const blog = await blogModel.findOne({ _id: id })
    if (!blog) throw {
        status: 404,
        message: " blog not found"
    }
    Object.assign(blog, newBodyObject)
    await blog.save()
    res.send(blog)
})


app.patch("/update-one/:id", async (req, res) => {
    const { id } = req.params
    const newBodyObject = omitEmpty(req.body)
    const blog = await blogModel.findOne({ _id: id })
    if (!blog) throw {
        status: 404,
        message: " blog not found"
    }
    const result = await blogModel.updateOne({ _id: id },{$set:newBodyObject})
    res.send(result)
})
app.patch("/find-and-update/:id", async (req, res) => {
    const { id } = req.params
    const newBodyObject = omitEmpty(req.body)
    // const blog = await blogModel.findOne({ _id: id })
    // if (!blog) throw {
    //     status: 404,
    //     message: " blog not found"
    // }
    // const result = await blogModel.updateOne({ _id: id },{$set:newBodyObject})

    const blog=await blogModel.findOneAndUpdate({_id:id},{$set:newBodyObject})
    res.send(blog) 
}) 


app.patch("/update-many/:id", async (req, res) => {
    const { id } = req.params
    const newBodyObject = omitEmpty(req.body)
    const blog = await blogModel.findOne({ _id: id })
    if (!blog) throw {
        status: 404,
        message: " blog not found"
    }
    const result = await blogModel.updateMany({ _id: id },{$set:newBodyObject})
    res.send(result)
})


app.use(ErrorHandel)
app.use(NotFoundError)
app.listen(3000, () => {
    console.log("server run on port 3000:http://localhost:3000");

})