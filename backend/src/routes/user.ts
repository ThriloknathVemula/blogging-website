import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign} from 'hono/jwt'
import { signinInput, signupInput } from '@thriloknath/common-medium'

export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL:string;
        JWT_SECRET:string;
    }
}>()

userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
        return c.json({'message':"Invalid inputs"})
    }

    const existingUser = await prisma.user.findUnique({
        where:{
            email:body.email
        }
    });
    if(existingUser){
        return c.json({message:"User already exists, try signing in"});
    }

    const user = await prisma.user.create({
        data:{
            email: body.email,
            password: body.password,
            name: body.name
        }
    });

    const payload = {id:user.id};
    const secretKey = c.env.JWT_SECRET;

    const token = await sign(payload,secretKey);

    return c.json({
        jwt:token
    })
    
    // return c.text('Hello Hono!')
})

userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);

    if(!success){
        return c.json({"message":"Invalid Inputs"});
    }

    const existingUser = await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    });

    if(!existingUser){
        return c.json({message:"User not found"})
    }

    const payload = {id:existingUser.id};
    const secretKey = c.env.JWT_SECRET;

    const token = await sign(payload,secretKey);
    return c.json({
        jwt:token
    })


    // return c.text('Hello Hono!')
})

