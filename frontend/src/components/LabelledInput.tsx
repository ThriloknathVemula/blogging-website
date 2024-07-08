import { ChangeEvent } from "react";

interface labelledInputType{
    label: string;
    placeholder: string;
    onChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    value:string;
    name:string;
}

// const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
//     console.log(e.target.value)
// }

export const LabelledInput = ({label,placeholder,onChangeFunc,type,value,name}:labelledInputType) =>{
    return(
        <div className="flex flex-col mb-3">
            <label className="font-semibold text-md pb-1" htmlFor={label}>{label}</label>
            <input className="border-solid border-2 border-gray-500 rounded-md p-1" placeholder={placeholder} type={type || "text"} onChange={onChangeFunc} id={label} value={value} name={name}/>
        </div>
    )
}