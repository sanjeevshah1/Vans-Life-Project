import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import App from './App.tsx'
import "./App.css"
import './index.css'
import Home from "./Pages/Home.tsx"
import About from "./Pages/About.tsx"
import Vans from './Pages/Vans.tsx'
import VanDetail from './Pages/VanDetail'
import Layout from './Components/Layout.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
