import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}:{children:ReactNode})=>{
    const token = localStorage.getItem("token");
    if(token===undefined){
        return <Navigate to="/signin"/>
    }
    else{
        return <>{children}</>
    }
}