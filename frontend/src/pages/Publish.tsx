import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar"
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Publish = ()=>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    
    const changeTitle = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
    }

    const changeContent = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setContent(e.target.value);
    }

    const sendPostInputs = async()=>{
        const token = localStorage.getItem("token");
        const postInputs = {title,content};
        await axios.post(`${BACKEND_URL}/api/v1/blogs`,{
            headers:{
                Authorization:`Bearer ${token}`
            },
            data: postInputs
        })
    }
    
    return(
        <div>
            <Appbar/>
            <div className="flex justify-center">
                <div className="publish-page-body w-3/5 mt-5 flex flex-col items-center h-screen">
                    <h1 className="font-bold text-md md:text-3xl mb-2">Write your blog</h1>
                    <input type="text" placeholder="Title" className="rounded-md mt-2 w-3/5 border-solid border-2 outline-none p-2 border-slate-700" onChange={changeTitle}/>
                    <textarea placeholder="Type your content..." className="w-3/5 h-1/2 mt-2 rounded-md border-solid border-2 outline-none p-2 border-slate-700" onChange={changeContent}/>
                    <button type="button" onClick={sendPostInputs} className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Post</button>
                </div>
            </div>
        </div>
    )
}


{/* <h1>Write your blog</h1>
                <input type="text" placeholder="Title" className="rounded-md"/>
                <textarea */}