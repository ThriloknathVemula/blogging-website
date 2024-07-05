import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = ()=>{
    return(
        <>
            <div className="grid grid-cols-1 pt-10 md:grid-cols-2 h-screen">
                <div className="flex justify-center self-center">
                    <Auth type="signup"/>
                </div>
                <div className="signup-quote invisible md:visible flex justify-center self-center">
                    <Quote/>
                </div>
            </div>
        </>
    )
}