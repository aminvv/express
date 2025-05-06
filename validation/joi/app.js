const { ErrorHandler, NotfoundError } = require('./utils/error-handler')
const express = require('express');
const {  loginValidationSchema, registerValidationSchema } = require('./validattion/joi.validation');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.post('/login',  async(req, res,next) => {
   try {
      await loginValidationSchema().validateAsync(req.body)
      res.send(req.body)
   } catch (error) {
      next(error)
   }
})
app.post('/register', async(req, res,next) => {
try {
   await registerValidationSchema().validateAsync(req.body)
   res.send(req.body)
} catch (error) {
   next(error)
}
})


app.use(NotfoundError)
app.use(ErrorHandler)
app.listen(3000, () => {
   console.log('http://localhost:3000');
})