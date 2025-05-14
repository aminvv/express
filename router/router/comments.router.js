 const {Router}=require('express')
 const router=Router()


 router.get('/',(req,res)=>{
 res.send("comments")
 })
 router.post('/',(req,res)=>{
 res.send("create new  comment")
 })
 router.delete('/:id',(req,res)=>{
 res.send(`delete comment by id # ${req.params.id}`)
 })
 router.patch('/:id',(req,res)=>{
 res.send(`update comment by id # ${req.params.id}`)
 })



 module.exports={
    commentRouter:router
 }