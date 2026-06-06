import mongoose, { mongo, Mongoose } from "mongoose";

const convoModel = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    }

    ]
}, { timestamps: true })

export const Conversation = mongoose.model("Conversation", convoModel)




const commentSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})


const Comments=mongoose.model("Comments",commentSchema)