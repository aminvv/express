const express=require('express');
const { allRouter } = require('./routers');
const app=express()
const serveFavIcon=require('serve-favicon')
const path=require('path')
app.use(serveFavIcon(path.join(__dirname,'./icon/timer_arrows_stopwatch_clock_dead_icon_265376.png')))
// app.use((req, res, next) => {
//     if (req.path.startsWith("/user")) { 
//         app.use(serveFavIcon(path.join(__dirname, './icon/timer_arrows_stopwatch_clock_dead_icon_265376.png')));
//     }
//     next();
// })
app.use(allRouter)


app.listen(3000,()=>{
    console.log("http://localhost:3000  run server on port 3000" );
})