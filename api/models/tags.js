import mongoose, { model } from "mongoose";


const tagSchema = mongoose.Schema({
    tag:[String],
    noteId:[String],
    userId:String
},{timestamp:true})


export default mongoose.model("tag", tagSchema)