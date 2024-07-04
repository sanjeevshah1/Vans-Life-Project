import {Outlet, Navigate} from "react-router-dom"

const AuthRequired = () => {
  
    const isLoggedIn: boolean = JSON.parse(localStorage.getItem("isLoggedIn") || "false");
    if(!isLoggedIn){
        return <Navigate to="/login" state={{message: "Oops, You must login First."}} replace/>
    }
  return (
    <Outlet/>
  )
}

export default AuthRequired