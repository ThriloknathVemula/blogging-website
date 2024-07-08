import { Link } from "react-router-dom";
import { Blog } from "../hooks";
import { Avatar } from "./Avatar";


export const BlogCard = ({title,content,author,id}: Blog)=>{
    const authorName = author.name;

    return(
        <Link to={`/blogs/${id}`}>
            <div className="border-b-2 border-black w-screen max-w-screen-md p-2">
                <div className="blog-card-header flex items-center gap-3 mb-1">
                    <Avatar authorName={authorName}/>
                    <p className="font-semibold text-md">{authorName===null ? "Anonymous" : `${authorName}`}</p>
                    <p className="text-slate-400">07-07-2024</p>
                </div>
                <div className="blog-card-body flex flex-col ">   
                    <h1 className="font-bold text-xl">{title}</h1>
                    <p className="font-thin">{content.slice(0,100)+"..."}</p>
                </div>
                <div>
                    {`${Math.ceil(Math.random()*15)} minute(s) read`}
                </div>
            </div>
        </Link>
        
    )
}