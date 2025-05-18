 const {Router}=require('express')
const { AuthRouters } = require('./auth.routes')
const { profileRouters } = require('./profile.routes')
 const  router=Router()

 router.use('/auth',AuthRouters)
 router.use('/user',profileRouters)

 module.exports={
    AllRouters:router
 }