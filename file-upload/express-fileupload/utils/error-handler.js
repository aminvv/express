
 const NotfoundError=(req,res,next)=>{
    return res.status(404).json({
        statusCode:res.statusCode,
        error:{
            type:"Not Found",
            message:"router "+ req.url + " not found"
        }
    })
 }


 const ErrorHandler=(err,req,res,next)=>{
console.log(err);

     return res.send({
        statusCode:res.statusCode || err.statusCode|| 500,
        error:{
            message:(err.message|| "error server internal"),
     
        }
     })
 }


 const ErrorHandlers={
    ErrorHandler,
    NotfoundError
}

 module.exports=ErrorHandlers