import { useState } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import user from "./../assets/van2.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <header className="nav-bar verti-center">
      <div className="temporary">
        <Link id="logo" to="/">#VANSLIFE</Link>
        <div
          className={`menu-icon ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          &#9776;
        </div>
      </div>
      <motion.nav
        className={`links both-center ${menuOpen ? '' : 'hide'}`}
        initial={{ x: "-100vw", y: "-100vh", opacity: 0 }}
        animate={{ x: menuOpen ? 0 : 0, y: menuOpen ? 0 : 0, opacity: menuOpen ? 1 : 1}}
        transition={{ duration: 0.8 }}
      >
        <NavLink to="/" className={({ isActive }) => isActive ? "current-link" : ""}>
          Home
        </NavLink>
        <NavLink to="host" className={({ isActive }) => isActive ? "current-link" : ""}>
          Host
        </NavLink>
        <NavLink to="about" className={({ isActive }) => isActive ? "current-link" : ""}>
          About
        </NavLink>
        <NavLink to="vans" className={({ isActive }) => isActive ? "current-link" : ""}>
          Vans
        </NavLink>
        <NavLink to="login" id="login" className={({ isActive }) => isActive ? "current-link" : ""}>
          <img src={user} id="user" alt="user-icon" />
          <p>Login</p>
        </NavLink>
        <button
          id="log-out"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </motion.nav>
    </header>
  );
};

export default Header;
