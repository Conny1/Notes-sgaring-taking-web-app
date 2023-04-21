import mongoose, { model } from "mongoose";


const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        
    },
    tags:[String],
    userId:String
},{timestamps:true})


export default mongoose.model("notes", noteSchema)