import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="nav-bar verti-center">
        <Link id="logo" to="home">#VANLIFE</Link>
        <nav className="links flex">
            <Link to="/host">Host</Link>
            <Link to="about">About</Link>
            <Link to="vans">Vans</Link>
        </nav>
    </header>
  )
}

export default Header