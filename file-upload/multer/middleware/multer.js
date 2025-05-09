 const  multer=require('multer')
 const  path=require('path')
 const  fs=require('fs')
 

 const storage= multer.diskStorage({
    destination:function(req,file,callB){
        fs.mkdirSync('public/uploads',{recursive:true})
        callB(null,'public/uploads')
    },
    filename: function(req,file,callB){
        const ext=path.extname(file.originalname)
        const filename=Date.now() +ext
        callB(null,filename)
    }
 })

 const uploadFile=multer({storage})

 module.exports=uploadFile