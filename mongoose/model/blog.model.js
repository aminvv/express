const{Schema,model}=require('mongoose')

const blogSchema=new  Schema({
title:{type:String,required:true},
text:{type:String,required:true},
show:{type:Boolean,default:false},
likes:{type:Number,default:0},
bookmarks:{type:[String],default:[]},
},{
    timestamps:true
})

const blogModel=model('blog',blogSchema)
module.exports={blogModel}
