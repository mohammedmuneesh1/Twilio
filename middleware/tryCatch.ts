
import { Request,Response,NextFunction } from "express"
import { RequestHandler } from "express";
import {CONSTANT} from "../constants/requestStatus"

export function tryCatch(codeBlock:RequestHandler ){
    return async (req:Request,res:Response,next:NextFunction)=>{
        try{
            await codeBlock(req,res,next);
        }
        catch(error:any){
            return res.status(500).json({status:CONSTANT.FAILURE,message:"error occured on server side. tryCatch", error:error.message})
        }
    }
}
