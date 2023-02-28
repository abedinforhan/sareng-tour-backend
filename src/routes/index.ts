import express, { NextFunction, Request, Response, Router } from "express";

const router:Router=express.Router()

router.get('/ping',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({status:"pong"})
    next()
})


export default router