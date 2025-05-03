const { ErrorHandler, NotfoundError } = require('./utils/error-handler')
const express = require('express');
const { loginValidator } = require('./validators/auth.validator');
const { validationResult } = require('express-validator');
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.post('/login', loginValidator(), (req, res) => {
   const error=validationResult(req)
   let obj={}
   error?.array().forEach(err => {
      obj[err.param]=err.msg
   });
      res.send(obj)

})

app.use(NotfoundError)
app.use(ErrorHandler)
app.listen(3000, () => {
   console.log('http://localhost:3000');
})