import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

const app = new Hono()
const corsOptions = {
  origin: '*', // Allow all origins. You can also specify a specific origin or a function to dynamically determine the origin
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  exposeHeaders: ['Content-Length', 'X-Kuma-Revision'], // Headers that can be exposed to the browser
  maxAge: 600, // Cache the CORS preflight request for 10 minutes
  credentials: true // Whether to allow credentials (cookies, authorization headers, etc.)
};

app.use("*",cors(corsOptions));

app.route('/api/v1/user',userRouter)
app.route('/api/v1/blog',blogRouter)

app.get('/',(c)=>{
  return c.text("Hello Hono")
})

export default app


