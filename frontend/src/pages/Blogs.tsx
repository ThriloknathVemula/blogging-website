import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { useBlogs } from "../hooks"

export const Blogs = () =>{
    const {loading, blogs} = useBlogs();
    if(loading){
        return(
            <div>
                <Appbar/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
            </div>
        )
    }
    return(
        <>
            <Appbar/>
            <div className="flex flex-col items-center p-2">
                {blogs.map(eachBlog=>(
                <BlogCard key={eachBlog.id} id={eachBlog.id} title={eachBlog.title} content={eachBlog.content} author={eachBlog.author}/>
            ))}
            </div>
        </>
    )
}