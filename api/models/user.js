import mongoose, { model } from "mongoose";


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    noteId:[String],
    public:{
        type:Boolean,
        default:false
    }
})


export default mongoose.model("user", UserSchema)