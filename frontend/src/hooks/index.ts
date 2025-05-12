import { useEffect, useState } from "react"
import axios from "axios"

export type authorName = {
    name:string | null;
}

export interface Blog {
    id: string;
    title: string;
    content: string;
    author: authorName;
}

const BACKEND_URL = process.env.BACKEND_URL;

export const useBlogs = () =>{
    const [loading,setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        const getBlogs = async()=>{
            const token = localStorage.getItem("token");
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            setBlogs(response.data);
            setLoading(false);
            console.log(response.data);
        }

        setTimeout(()=>{
            getBlogs()
        },2000);

    },[]);

    return {
        loading,
        blogs
    };
}

export const useBlogById = ({id}:{id:string}) =>{
    const [loading,setLoading] = useState(true);
    const [blogDetails,setBlogDetails] = useState<Blog>();

    useEffect(()=>{
        const getBlogDetails = async()=>{
            const token = localStorage.getItem("token");
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            setBlogDetails(response.data);
            setLoading(false);
        }
        setTimeout(()=>{
            getBlogDetails()
        },1000)
    },[]);

    return {
        loading,
        blogDetails
    }
}