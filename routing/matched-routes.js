const express = require("express")
const app = express()


users = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
]

products = [
    { id: 1, name: "product1" },
    { id: 2, name: "product2" },
    { id: 3, name: "product3" },
]


app.get("/file.txt", (req, res) => {
    console.log("hello express");
    res.status(200).send("accepted: " ,req.url)
}) 

// app.get("/ab?cd", (req, res) => {
//     console.log("hello express");
//     res.status(200).send("accepted: " ,req.url)
// })

// app.get("/ab+cd", (req, res) => {
//     console.log("hello express");
//     res.status(200).send("accepted: " ,req.url)
// })
// app.get("/ab*cd", (req, res) => {
//     console.log("hello express");
//     res.status(200).send("accepted: " ,req.url)
// })
// app.get("/ab(cd)?e", (req, res) => {
//     console.log("hello express");
//     res.status(200).send("accepted: " ,req.url)
// })


app.listen(3000, () => {
    console.log("server run on port 300:http://localhost:3000");

})