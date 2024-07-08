import { useState } from "react";

export const Home = ()=>{
    const [test,setTest] = useState("");

    console.log(test)

    return(
        <div>
            <h1>Home</h1>
            <input type="text" placeholder="test" value={test} onChange={(e)=>setTest(e.target.value)}/>
        </div>
    )
}