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


app.get("/", (req, res) => {
    console.log("hello express");
    res.send({ message: "welcome express" })

})
app.get("/users", (req, res) => {
    console.log("hello express");
    res.status(200).json({ users })

})
app.get("/products", (req, res) => {
    console.log("hello express");
    res.statusCode = 200
    res.json({ products })

})



app.get("/products/:id", (req, res) => {
    const{id}=req.params
    const product=products.find((user)=>user.id ==id)
    if(!product){
        res.status(404).json({
            statusCode:res.statusCode,
            error:{
                message:" product not found"
            }
        })
    }else[
        res.status(200).json({
            statusCode:res.statusCode,
            data:{
                product
            }
        })
    ]
    
})










app.get("/users/:id", (req, res) => {
    const{id}=req.params
    const user=users.find((user)=>user.id ==id)
    if(!user){
        res.status(404).send("user not found")
    }else[ 
        res.status(200).send(user) 
    ] 
    
})



// app.get("/products/:id?",function (req,res) {
//     const {id}=req.params
//     let product =null
//     product=products.find(product=>product.id==id)
//     if(id){
//         return res.send({
//             statusCode:res.statusCode,
//             data:{
//                 product
//             }
//         })
//     }
//     res.json({
//         product
//     })
// })


app.get("/stuff/:id",(req,res)=>{
    res.send(req,params)
})

app.listen(3000, () => {
    console.log("server run on port 300:http://localhost:3000");

})