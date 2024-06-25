import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostInput, updatePostInput } from "@thriloknath/common-medium";
import { Hono } from "hono"
import { verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings:{
        JWT_SECRET:string;
        DATABASE_URL:string;
    },
    Variables:{
        userId:string;
    }
}>()

blogRouter.use(async(c,next)=>{
    try{
        const header = c.req.header('Authorization');
    if(!header){
        return c.json({message:"Missing Authorization token"})
    }
    const token = header.split(" ")[1];
    type payloadType = string | any;
    const payload:payloadType = await verify(token,c.env.JWT_SECRET);
    if(!payload){
        c.status(401);
        return c.json({message:"Unauthorized"});
    }

    c.set("userId",payload.id);
    await next()
    }catch(err){
        return c.json({message:"Unauthorized"})
    }
})



blogRouter.post('/', async (c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
    
        const body = await c.req.json();

        const {success} = createPostInput.safeParse(body);
        if(!success){
            c.status(400);
            return c.json({"message":"Invalid input"})
        }

        const userId = c.get("userId");
    
        const blogPost = await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:userId,
                published:true
            }
        });
    
        return c.json({
            id:blogPost.id
        })
    }catch(err){
        console.log(err);
        return c.text("Invalid")
    }

    // return c.text('Hello Hono!')
})

blogRouter.get('/bulk', async(c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        
        const allBlogPosts = await prisma.post.findMany({});
    
        return c.json(allBlogPosts);
    }catch(err){
        console.log(err);
        return c.text("Error while fetching data")
    }

  //return c.text('Hello Hono3!')
})
  
blogRouter.put('/', async(c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
        const body = await c.req.json();

        const {success} = updatePostInput.safeParse(body);
        if(!success){
            c.status(400);
            return c.json({"message":"Invalid Inputs"})
        }
        const userId = c.get("userId");
        await prisma.post.update({
            where:{
                id: body.id,
                authorId: userId
            },
            data:{
                title:body.title,
                content:body.content
            }
        })
        return c.text("Update Successful");
    }catch(err){
        return c.text("Error while updating");
    }
})
  
blogRouter.get('/:id', async(c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());
      const postId = c.req.param("id");
      const post = await prisma.post.findUnique({
        where:{
            id:postId
        }
      })
      return c.json(post);
    }catch(err){
        return c.text("Error while fetching the Blog Post");
    }
})
  

  