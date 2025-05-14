 const {Router}=require('express')
const { getUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller')
 const router=Router()


 router.get('/',getUser)
 router.post('/',createUser)
 router.delete('/:id',deleteUser)
 router.patch('/:id',updateUser)



 module.exports={
    userRouter:router
 }