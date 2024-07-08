import { Link } from "react-router-dom"
import { FaSquarePlus } from "react-icons/fa6";
import { Avatar } from "./Avatar";

export const Appbar = ()=>{
    return(
        <div className="border-b flex justify-between px-10 py-4">
            <Link to={'/blogs'} className="flex text-xl flex-col justify-center cursor-pointer font-semibold">
                Medium
            </Link>
            <div className="flex items-center gap-4">
                <Link to={'/publish'} className="cursor-pointer px-2 py-1 rounded-md flex items-center gap-1 bg-green-500 text-slate-100">
                    <p>New</p>
                    <FaSquarePlus/>
                </Link>
                <Avatar authorName={null}/>
            </div>
        </div>
    )
}