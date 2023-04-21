import express from "express";
import { CreateNotes, UpdateNotes, deleteNote, getAllNotes, getAllOneNote } from "../controlers/notes.js";

const routers = express.Router()

routers.get("/getAll", getAllNotes  )

routers.get("/getOne/:noteid", getAllOneNote  )

routers.post("/add/:id", CreateNotes  )


routers.put("/update/:id/:notesid", UpdateNotes  )

routers.delete("/delete/:id/:notesid", deleteNote  )

export default routers