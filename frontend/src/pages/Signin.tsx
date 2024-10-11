import { Appbar } from "../components/Appbar";
import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signin = ()=>{
    return(
        <>
            <Appbar/>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 h-screen">
                <div className="flex justify-center">
                    <Auth type="signin"/>
                </div>
                <div className="signin-quote invisible md:visible flex justify-center">
                    <Quote/>
                </div>
            </div>
        </>
    )
}