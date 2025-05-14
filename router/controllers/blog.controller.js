



 class BlogController{
 getBlog(req,res){
   console.log(req.time);
 res.send("blogs")
 }
 createBlog(req,res){
   console.log(req.time);
 res.send("create new  blog")
 }
 deleteBlog(req,res){
   console.log(req.time);
 res.send(`delete blog by id # ${req.params.id}`)
 }
 updateBlog(req,res){
   console.log(req.time);
 res.send(`update blog by id # ${req.params.id}`)
 }
 }


 module.exports={
    BlogController
 }