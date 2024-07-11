import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { AuthorFooter } from "./AuthorFooter";
import { Avatar } from "./Avatar";

export const BlogDetails = ({blog}:{blog:Blog})=>{
    const {title,content,author} = blog;
    return(
        <div>
            <Appbar/>
            <div className="blog-details flex flex-col items-center mx-auto mt-3 w-3/5">
                <h1 className="font-bold text-xl md:font-extrabold md:text-3xl mt-2">{title}</h1>
                <div className="author-header flex items-center mt-2 gap-2">
                    <Avatar authorName={author.name} big={true}/>
                    <h1 className="font-semibold text-xl text-gray-700">{author.name===null?"Anonymous" : author.name}</h1>
                </div>
                <h1 className="font-medium text-xs md:text-base mt-1 text-slate-400">Date published: 07-07-2024</h1>
                <div className="blog-details-body pt-4 p-2 text-md md:text-lg text-slate-600">
                    {content}
                </div>
                <div className="mr-auto">
                    <AuthorFooter name={author.name}/>
                </div>
            </div>
        </div>
    )
}