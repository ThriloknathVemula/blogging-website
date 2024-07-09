import { authorName } from "../hooks"
import { Avatar } from "./Avatar"

export const AuthorFooter = ({name}:authorName)=>{
    return(
        <div className="mt-7 p-2">
            <h2 className="italic mb-1 font-semibold">About Author:</h2>
            <Avatar big={true} authorName={name}/>
            <div className="flex flex-col gap-1 mt-1">
            <h1 className="font-bold text-md">Written by {name===null?"Anonymous":`${name}`}</h1>
            <h2 className="font-semibold text-md">{Math.ceil(Math.random()*1500)} followers</h2>
            <p className="author-description">{name===null ? "The above article is written by an anonymous user" : `${name} is a seasoned technology writer with expertise in software development and emerging tech trends. He has a knack for making complex concepts accessible, engaging tech enthusiasts and professionals alike.`}</p>
        </div>
        </div>
    )
}