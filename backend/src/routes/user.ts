import express from 'express';
import { PrismaClient } from "@prisma/client";
import zod from 'zod'


const prisma = new PrismaClient();

const app=express();

const router=express.Router();

const signUpSchema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    name:zod.string()
})

const signInSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6)
})

router.post("/signup",async (req,res)=>{

    const body=req.body;
    const {success}=signUpSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            message:"Email already taken / Incorrect inputs"
        })
    }

    const user = await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })

    if(user!=null){
       return res.status(411).json({
            message:"user already exists"
        })
    }

    const newUser=await prisma.user.create({
        data:{
            email:body.email,
            name:body.name,
            password:body.password 
        }
    })

    return res.json({
        message:"User created successfully"
    })

})

router.post("/signin",async (req,res)=>{
     const body=req.body;

     const {success}=signInSchema.safeParse(body);

     if(!success){
        res.status(411).json({
            message:"Incorrect inputs"
        })
     }

     const user=await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
     })

     if(user){
        return res.json({
            message:"logged in"
        })
     }

     return res.status(411).json({
        message:"error while logging in"
     })
})

export default router;