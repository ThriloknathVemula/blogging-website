import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@thriloknath/common-medium"
import { LabelledInput } from "./LabelledInput"
import { useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"

export const Auth = ({type}:{type:"signup" | "signin"})=>{
    const [credentials, setCredentials] = useState<SignupType>({
        name:"",
        email:"",
        password:""
    });

    console.log(credentials)

    const navigate = useNavigate();

    const sendRequest = async()=>{
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,credentials);
            const jwt = await response.data;
            localStorage.setItem("token",jwt);
            navigate('/blogs');
        }catch(e){
            alert('Error while signing up')
        }
    }

    const SignupForm = ()=>(
            <div className="signup-form">
                <div className="signup-header mb-7">
                    <h2 className="font-bold text-2xl text-black">Create an Account</h2>
                    <p className="text-md text-slate-400">Already have an Account? <Link to={'/signin'} className="underline">Sign In</Link></p>
                </div>
                <div className="signup-body">
                    <LabelledInput label="Name" placeholder="John Doe" onChangeFunc={(e)=>setCredentials({
                        ...credentials,
                        name: e.target.value
                    })}/>
                    <LabelledInput label="Email" placeholder="johndoe@example.com" onChangeFunc={(e)=>setCredentials({
                        ...credentials,
                        email: e.target.value
                    })}/>
                    <LabelledInput label="Password" type={"password"} placeholder="Enter your password" onChangeFunc={(e)=>setCredentials({
                        ...credentials,
                        password: e.target.value
                    })}/>
                    <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={sendRequest}>Sign Up</button>
                </div>  
            </div>
    )
    

    const SigninForm = ()=>(
            <div className="signin-form">
                <div className="signin-header mb-7">
                    <h2 className="font-bold text-2xl text-black">Sign In</h2>
                    <p className="text-md text-slate-400">Don't have an Account? <Link to={'/signup'} className="underline">Sign Up</Link></p>
                </div>
                <div className="signin-body">
                    <LabelledInput label="Email" placeholder="johndoe@example.com" onChangeFunc={(e)=>setCredentials({
                        ...credentials,
                        email: e.target.value
                    })}/>
                    <LabelledInput label="Password" type="password" placeholder="Enter your password" onChangeFunc={(e)=>setCredentials({
                        ...credentials,
                        password: e.target.value
                    })}/>
                    <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={sendRequest}>Sign In</button>
                </div>  
            </div>
    )


    return type === "signup" ? <SignupForm/> : <SigninForm/>
}

