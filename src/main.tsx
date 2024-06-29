import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import App from './App.tsx'
import "./App.css"
import './index.css'
import Home from "./Pages/Home.tsx"
import About from "./Pages/About.tsx"
import Vans from './Pages/Vans.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="nav-bar verti-center">
            <Link id="logo" to="home">#VANLIFE</Link>
            <div className="links flex">
                <Link to="about">About</Link>
                <Link to="vans">Vans</Link>
            </div>
        </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home/vans" element={<Vans />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
