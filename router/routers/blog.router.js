 const {Router}=require('express')
const { BlogController } = require('../controllers/blog.controller')
 const router=Router()

 const blogController=new BlogController()

 
 router.get('/',blogController.getBlog)
 router.post('/',blogController.createBlog)
 router.delete('/:id',blogController.deleteBlog)
 router.patch('/:id',blogController.updateBlog)




 module.exports={
    blogRouter:router
 }