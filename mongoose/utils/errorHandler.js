 const NotFoundError= (req,res,next)=>{
    return res.status(404).json({
        statusCode:res.statusCode,
        error:{
            type:"Not Found",
            message:"not found"+ req.url +" route"
        }
    })
 }


 const ErrorHandel= (err,req,res,next)=>{
    return res.status(404).json({
        statusCode:err.statusCode || 500,
        error:{
            message:err.message || " internal server error"
        }
    })
 }


 module.exports={ ErrorHandel,NotFoundError}