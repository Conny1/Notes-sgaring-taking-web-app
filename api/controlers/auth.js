import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from 'bcryptjs'
import validateSchema from "../utils/validate_schema.js";
import {createError} from  '../utils/err.js'

export const signUp=async(req,resp,next)=>{
   try {
        const validatedSchema = await validateSchema.validateAsync(req.body)
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(validatedSchema.password, salt);
        const data = new User({
            name:validatedSchema.name,
            email:validatedSchema.email,
            password:hash
        })

        const result = await data.save()
        const tokens = jwt.sign({id:result._id, isPublic:result.public},process.env.ACCESS_KEY )
        if(!result) return next(createError(500, 'Account not created. Try again'))
        
        const {password, ...others} = result._doc
        resp.status(200).json({...others, tokens})
        
    } catch (error) {
        next(error)
    }
}

export const login=async(req,resp,next)=>{
    try {
         const validatedSchema = await validateSchema.validateAsync(req.body)
        
        const result = await User.findOne({email:validatedSchema.email})
       if(!result) return next(createError(404, "USER NOT FOUND")) 
       const isCorrect = bcrypt.compareSync(validatedSchema.password, result.password); 
       if(!isCorrect) return next(createError(401, "INVALID USERNAME OR PASSWORD" )) // false
      
       const tokens = jwt.sign({id:result._id,isPublic:result.public }, process.env.ACCESS_KEY)
       const {password, ...others} = result._doc
       resp.status(200).json({...others, tokens})
        
         
     } catch (error) {
         next(error)
     }
 }