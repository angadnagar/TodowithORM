import express from 'express';
import { PrismaClient } from '@prisma/client';
import zod from 'zod'

const prisma=new PrismaClient();

const app=express();

const router=express.Router();

const todoSchema=zod.object({
    title:zod.string(),
    description:zod.string(),
    published:zod.boolean(),
    userId:zod.number()
})

router.post("/create",async (req,res)=>{
     const body=req.body;

     const {success}=todoSchema.safeParse(body);

     if(!success){
        return res.status(411).json({
            message:"incorrect inputs"
        })
     }

     const newTodo= await  prisma.todo.create({
        data:{
            title:body.title,
            description:body.description,
            published:body.published,
            userId:body.userId
        }
     })

     return res.json({
        message:"todo created successfully"
     })
})

router.get("/all",async (req,res)=>{
    const todos=await prisma.todo.findMany({});
    // const specificTodo=await prisma.todo.findMany({
    //     where:{
    //         userId:1
    //     }
    // })

    return res.json({
        todos:todos
    })
})

export default router;