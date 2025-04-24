const express = require("express")
const app = express()
const querystring=require("querystring")
const posts=require('../routing/post.json')


app.get("/", (req, res) => {
    console.log(querystring.parse("key=value&key1=value1&key2=value2"));
    console.log(querystring.stringify({
        key: 'value',
        key1: 'value1',
        key2: 'value2'
      }));
    
res.send(req.query)
}
)



app.get("/search", (req, res) => {
const{title,desc}=req.query
const regexTitle = title ? new RegExp(title, 'gi') : null;
const regexDesc = desc ? new RegExp(desc, 'gi') : null;
const filter= posts.filter(post=>(post.title.match(regexTitle)||post.body.match(regexDesc)))
    
res.send({posts:filter})
}) 



app.listen(3000, () => {
    console.log("server run on port 300:http://localhost:3000");

})