// Header.tsx
import  { useState } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
// import avatar from "./../assets/avatar.png";
import user from "./../assets/van2.svg"
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nav-bar verti-center">
      <div className="temporary">
      <Link id="logo" to="/">#VANSLIFE</Link>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      </div>
      <nav className={`links both-center`} style={{display: menuOpen ? "none": "flex"}}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "current-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="host"
          className={({ isActive }) => (isActive ? "current-link" : "")}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "current-link" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "current-link" : "")}
        >
          Vans
        </NavLink>
        <NavLink
          to="login"
          id="login"
          className={({ isActive }) => (isActive ? "current-link" : "")}
        >
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
      </nav>
    </header>
  );
};

export default Header;
