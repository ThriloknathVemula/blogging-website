import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

type authorName = {
    name:string | null;
}

export interface Blog {
    id: string;
    title: string;
    content: string;
    author: authorName;
}



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
        },5000);

    },[]);

    return {
        loading,
        blogs
    };
}