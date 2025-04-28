const { ErrorHandler, NotfoundError } = require('./error-handler')
const express = require('express');
const app = express()
const path = require("path")
app.use(express.static("public"))
app.set("view engine", "hbs")
app.set(path.join(__dirname, "views"))




users = [
    {
        id: 1,
        username: "amin"
    },
    {
        id: 2,
        username: "ali"
    },
    {
        id: 3,
        username: "vahid"
    },
]


app.get('/', (req, res) => {
    res.render("index", {})
})




app.use(NotfoundError)
app.use(ErrorHandler)
app.listen(3000, () => {
    console.log('http://localhost:3000');
})