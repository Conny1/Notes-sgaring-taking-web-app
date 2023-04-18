import mongoose, { model } from "mongoose";


const tagSchema = mongoose.Schema({
    tag:String,
    body:{
        type:String,
        unique:true
    },
    noteId:[String],
    userId:String
},{timestamp:true})


export default mongoose.model("tag", tagSchema)