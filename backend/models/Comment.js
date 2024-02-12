const mongoose=require("mongoose")

const CommentSchema=new mongoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
},{timestamps:true})

module.exports=mongoose.model("Comment", CommentSchema)
