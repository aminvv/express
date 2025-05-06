const { ErrorHandler, NotfoundError } = require('./utils/error-handler')
const express = require('express');
const { validate } = require('express-validation');
const { registerValidation,loginValidation } = require('./validattion/auth.validation');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.post('/login', validate(loginValidation()) ,(req, res) => {
   res.send(req.body)

})
app.post('/register', validate(registerValidation()) ,(req, res) => {
   res.send(req.body)

})


app.use(NotfoundError)
app.use(ErrorHandler)
app.listen(3000, () => {
   console.log('http://localhost:3000');
})