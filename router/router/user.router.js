 const {Router}=require('express')
 const router=Router()


 router.get('/',(req,res)=>{
 res.send("users")
 })
 router.post('/',(req,res)=>{
 res.send("create new  user")
 })
 router.delete('/:id',(req,res)=>{
 res.send(`delete user by id # ${req.params.id}`)
 })
 router.patch('/:id',(req,res)=>{
 res.send(`update user by id # ${req.params.id}`)
 })



 module.exports={
    userRouter:router
 }