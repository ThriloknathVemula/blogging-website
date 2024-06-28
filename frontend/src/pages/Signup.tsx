import { useState } from "react"

export const Signup = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username, setUsername] = useState('');

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                <div className="signup-form flex justify-center self-center">
                    <h1>Signup form</h1>
                </div>
                <div className="signup-quote invisible md:visible flex justify-center self-center">
                    <h1>Quote</h1>
                </div>
            </div>
        </>
    )
}