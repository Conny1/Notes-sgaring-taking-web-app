import Notes from "../models/notes.js"
import Tags from "../models/tags.js"
import { createError } from "../utils/err.js"


export const CreateNotes= async (req,resp,next)=>{    
    try {
        
        const notes = new Notes({...req.body , userId:req.params.id })
         const saveTodb = await notes.save()
       if(!saveTodb) return next(createError(500, "DATA NOT SAVED TRY AGAIN!!"))
        resp.status(200).json(saveTodb)
        
    } catch (error) {
        next(error)
    }
}

export const UpdateNotes= async (req,resp,next)=>{   
    const userid = req.params.id
    const notesId = req.params.notesid 
    const {tags, ...others} = req.body
    
    try {
       let updatenotes = await Notes.findByIdAndUpdate(notesId,{ $set:others}, {new:true})
       if(tags || tags.length > 0){
         updatenotes = await Notes.findByIdAndUpdate(notesId,{ $set:{tags:tags}}, {new:true})
    }
       if(!updatenotes) return next(createError(500, "DATA NOT FOUND OR UPDATED"))
       
      //  console.log(updatenotes)
    
       resp.status(200).json(updatenotes)
        
    } catch (error) {
        next(error)
    }
}

// get all
export const getAllNotes= async(req, resp, next)=>{
 try {
    const getAlldata = await Notes.find()
    if(!getAlldata || getAlldata.length=== 0) return next(createError(404, "DATA NOT FOUND"))
    resp.status(200).json(getAlldata)    
 } catch (error) {
    next(error)
  }
}

// getOne
export const getAllOneNote= async(req, resp, next)=>{
    const noteID = req.params.noteid
    try {
       const getOnedata = await Notes.findById(noteID)
       if(!getOnedata || getOnedata.length === 0) return next(createError(404, "DATA NOT FOUND"))
       resp.status(200).json(getOnedata)    
    } catch (error) {
       next(error)
    }
   }

//    delete
export const deleteNote= async(req, resp, next)=>{
    const noteID = req.params.notesid
    try {
        const result = await  Notes.findByIdAndDelete(noteID)    
        console.log(result)  
        if(!result) return next(createError(500,"TRY AGAIN, NOT DELETED" )) 
       resp.status(200).json("DELETED")    
    } catch (error) {
       next(error)
    }
   }