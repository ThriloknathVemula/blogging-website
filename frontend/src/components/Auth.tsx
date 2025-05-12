import { Link, useNavigate } from "react-router-dom"
import { SignupType } from "@thriloknath/common-medium"
import { LabelledInput } from "./LabelledInput"
import { useState } from "react"



export const Auth = ({type}:{type:"signup" | "signin"})=>{
    const [credentials, setCredentials] = useState<SignupType>({
        email:"",
        name:"",
        password:""
    });

    const BACKEND_URL = process.env.BACKEND_URL;

    const navigate = useNavigate();


    const sendRequest = async()=>{
        try{
            const url = `${BACKEND_URL}/api/v1/user/${type}`;
            const options = {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(credentials)
            }
            const response = await fetch(url, options);
            const data = await response.json();
            setCredentials({email:"", name:"", password:""})
            if(data.message){
                alert(data.message);
                return
            }
            else{
                const {jwt} = data;
                localStorage.setItem("token",jwt);
                navigate('/blogs');
            }
        }catch(e){
            console.log(e)
            alert('Error while signing up')
        }
    }

    return (
        <div className="flex flex-col pt-5 md:pt-0">
            <div className="sign-header mb-7">
                <h2 className="font-bold text-2xl text-black">{type==="signup" ? "Create an Account" : "Sign In"}</h2>
                <p className="text-md text-slate-400">{type==="signup" ? 
                (
                    <>
                        Already have an Account? <Link to={'/signin'} className="underline">Sign In</Link>
                    </>) : (
                        <>
                            Dont have an account? <Link to={'/signup'} className="underline">Sign Up</Link>
                        </>
                    )}</p>
            </div>
            <div className="signup-body">
                {type==="signup" ? <LabelledInput label="Name" placeholder="John Doe" value={credentials.name || ""} name="name" onChangeFunc={(e)=>{
                    setCredentials({
                        ...credentials,
                        name:e.target.value
                    })
                }}/> : null}
                <LabelledInput label="Email" placeholder="johndoe@example.com" value={credentials.email} name="email" onChangeFunc={(e)=>{
                    setCredentials({
                        ...credentials,
                        email: e.target.value
                    })
                }}/>
                <LabelledInput label="Password" type={"password"} placeholder="Enter your password" name="password" value={credentials.password} onChangeFunc={(e)=>setCredentials({
                    ...credentials,
                    password: e.target.value
                })}/>
                <button type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={sendRequest}>{type==="signup"?"Sign Up" : "Sign In"}</button>
            </div>  
        </div>
    )

}

