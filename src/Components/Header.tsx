import {NavLink, Link} from "react-router-dom"
import avatar from "./../assets/avatar.png"
const Header = () => {
  return (
    <header className="nav-bar verti-center">
        <Link id="logo" to="/">#VANLIFE</Link>
        <nav className="links flex">
            <NavLink
             to="host"
             className={({ isActive }) => (isActive ? "current-link" : "")}
             >Host</NavLink>

            <NavLink
             to="about"
             className={({ isActive }) => (isActive ? "current-link" : "")}
            >About</NavLink>

            <NavLink
             to="vans"
             className={({ isActive }) => (isActive ? "current-link" : "")}
            >Vans</NavLink>

            <NavLink
             to="login"
             className={({ isActive }) => (isActive ? "current-link" : "")}
            ><img src={avatar} id="user" alt="user-icon" /></NavLink>

            <button onClick={()=>{
              localStorage.removeItem("isLoggedIn")
            }}>Log Out</button>
            
        </nav>
    </header>
  )
}

export default Header