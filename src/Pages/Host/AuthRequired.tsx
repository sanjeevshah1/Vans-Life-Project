import {Outlet, Navigate} from "react-router-dom"

const AuthRequired = () => {
    const isLoggedIn: boolean = false;
    if(!isLoggedIn){
        return <Navigate to="/login" state={{message: "Oops, You must login First."}} />
    }
  return (
    <Outlet/>
  )
}

export default AuthRequired