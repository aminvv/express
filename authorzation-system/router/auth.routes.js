 const {Router}=require('express')
 const {login,register}=require('../controller/auth.controller')
 const  router=Router()

 router.post('/register',register)
 router.post('/login',login)

 module.exports={
    AuthRouters:router
 }