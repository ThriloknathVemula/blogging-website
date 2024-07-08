import { FaMask } from "react-icons/fa6";

interface authorType {
    authorName : string | null;
}

export const Avatar = (props: authorType)=>{
    const {authorName} = props;
    if(authorName !== null){
        return <div className="rounded-full bg-slate-400 px-2.5 py-1 text-slate-200 font-bold">
            {authorName[0].toUpperCase()}
        </div>
    }else{
        return <div className="rounded-full bg-slate-400 p-2 text-slate-200">
            <FaMask/>
        </div>
    }
}