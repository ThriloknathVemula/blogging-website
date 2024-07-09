import { useParams } from "react-router-dom"
import { BlogDetails } from "../components/BlogDetails";
import { useBlogById } from "../hooks";
import { Hourglass } from "react-loader-spinner";

export const Blog = ()=>{
    const {id}= useParams();
    const {loading,blogDetails} = useBlogById({id:id || ""});

    if(loading || !blogDetails){
        return (
            <div className="flex h-screen justify-center items-center">
                <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#000000',"#808080"]}/>
            </div>
        )
    }

    return(
        <div>
            <BlogDetails blog={blogDetails}/>
        </div>
    )
}