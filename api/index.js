import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from  "dotenv"
import helmet from  "helmet"
import morgan from "morgan";
import cors from "cors";
//**** */
import AuthRouter from  "./routers/user.js";
import NotesRouter from  "./routers/Notes.js";
const app = express()
dotenv.config()
// connect to db
const connect =async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log(`connected to MongoDB`)
} 
const port = process.env.PORT || 5001 
// CONFIGURATIONS

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// middleware routers
app.use("/userAuth", AuthRouter)
app.use("/userNotes", NotesRouter)


// error handling
app.use((err, req,resp,next)=>{
 const errstatus = err.status || 500
 const errmessage = err.message ||  "Something went wrong"
 resp.status(errstatus).json({
    success:false,
    status:errstatus,
    message:errmessage,
    stack:err.stack
 })

})

app.listen( port, ()=>{
    console.log(`Backend connected on port ${port}`)
    connect()
} )