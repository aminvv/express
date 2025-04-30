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


app.use(ErrorHandel)
app.use(NotFoundError)
app.listen(3000, () => {
    console.log("server run on port 3000:http://localhost:3000");

})