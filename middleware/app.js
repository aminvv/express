const { default: camelcaseKey } = require("camelcase-keys")
const express = require("express")
const app = express()
const morgan = require("morgan")
const omitEmpty = require("omit-empty")
app.use(express.json());
app.use(express.urlencoded());
//  const camelcaseKey= (...args) =>import("camelcase-keys").then(({default:camelcaseKeys})=>camelcase(...args))  ترفند

// app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('dev'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))
// app.use(morgan('method: url: :status :res[Content-length]  :response-time ms'))

const auth = (req, res, next) => {
   const { username, password } = req.query
   if (username == "amin" && password == 12345) {
      return next()
   }
   res.send("authentication is failed")
}

const camelcase = async (req, res, next) => {
   req.body = await camelcaseKey(req.body, { deep: true })
   req.query = await camelcaseKey(req.query)
   req.params = await camelcaseKey(req.params)

   next()
}

app.get("/middle", auth, (req, res) => {
   res.send("user")
})
app.use(camelcase)
app.get("/camel", async (req, res) => {
   res.send({
      body: req.body,
      query: req.query,
      params: req.params,
   })
})







 function omitEmptyRemoveFiled(option={}){
   return function(req,res,next){
      req.body=omitEmpty(req.body,option)
      next()
   }
 }


app.post('/omit',omitEmptyRemoveFiled(),(req,res,next)=>{
   res.send(req.body)
})




app.listen(3000, () => {
   console.log("http://localhost:3000");

})