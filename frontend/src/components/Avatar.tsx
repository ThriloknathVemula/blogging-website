import { FaMask } from "react-icons/fa6";

interface authorType {
    authorName : string | null;
    big: boolean;
}

export const Avatar = (props: authorType)=>{
    const {authorName,big} = props;
    let bigClass = null;
    if(big===true){
        bigClass = 'text-2xl w-10 h-10'
    }
    if(authorName !== null){
        return <div className= {`rounded-full bg-slate-400 flex justify-center items-center px-2.5 py-1 text-slate-200 font-bold ${bigClass}`}>
            {authorName[0].toUpperCase()}
        </div>
    }else{
        return <div className={`rounded-full bg-slate-400 p-2 text-slate-200 ${bigClass}`}>
            <FaMask/>
        </div>
    }
}