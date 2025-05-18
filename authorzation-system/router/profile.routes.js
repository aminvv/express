 const {Router}=require('express')
 const {getProfile}=require('../controller/profile.controller')
const { checkAuth } = require('../middleware/check-auth')
 const  router=Router()

 router.get('/profile',checkAuth,getProfile)

 module.exports={
    profileRouters:router
 }