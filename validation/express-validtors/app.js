const { ErrorHandler, NotfoundError } = require('./utils/error-handler')
const express = require('express');
const { loginValidator, registerValidator } = require('./validators/auth.validator');
const { checkValidation } = require('./middleware/validator');
const { idValidator } = require('./validators/param');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.post('/login', loginValidator(), checkValidation, (req, res) => {
   res.send(req.body)

})

app.post('/register', registerValidator(), checkValidation, (req, res) => {
   res.send(req.body)
})


app.get('/param/:id', idValidator(), checkValidation, (req, res) => {
   res.send(req.params)
})

app.use(NotfoundError)
app.use(ErrorHandler)
app.listen(3000, () => {
   console.log('http://localhost:3000');
})