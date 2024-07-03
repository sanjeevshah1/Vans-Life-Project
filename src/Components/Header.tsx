import {NavLink, Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="nav-bar verti-center">
        <Link id="logo" to="/">#VANLIFE</Link>
        <nav className="links flex">
            <NavLink
             to="/host"
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
            
        </nav>
    </header>
  )
}

export default Header