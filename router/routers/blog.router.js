 const {Router}=require('express')
 const router=Router()


 router.get('/',(req,res)=>{
   console.log(req.time);
 res.send("blogs")
 })
 router.post('/',(req,res)=>{
   console.log(req.time);
 res.send("create new  blog")
 })
 router.delete('/:id',(req,res)=>{
   console.log(req.time);
 res.send(`delete blog by id # ${req.params.id}`)
 })
 router.patch('/:id',(req,res)=>{
   console.log(req.time);
 res.send(`update blog by id # ${req.params.id}`)
 })



 module.exports={
    blogRouter:router
 }