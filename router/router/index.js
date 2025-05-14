const { Router } = require('express')
const { userRouter } = require('./user.router')
const { blogRouter } = require('./blog.router')
const { commentRouter } = require('./comments.router')

const router = Router()


function setTime(req, res, next) {
    req.time = Date.now()
    next()
}


router.use('/user/', setTime, userRouter)
router.use('/blog/', setTime, blogRouter)
router.use('/comment/', setTime, commentRouter)


module.exports = {
    allRouter: router
}