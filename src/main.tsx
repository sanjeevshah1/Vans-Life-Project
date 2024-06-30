import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import App from './App.tsx'
import "./App.css"
import './index.css'
import Home from "./Pages/Home.tsx"
import About from "./Pages/About.tsx"
import Vans from './Pages/Vans.tsx'
import VanDetail from './Pages/VanDetail'
import Layout from './Components/Layout.tsx'
import Dashboard from './Pages/Host/Dashboard.tsx'
import Income from './Pages/Host/Income.tsx'
import Reviews from './Pages/Host/Reviews.tsx'
import HostLayout from './Pages/Host/HostLayout.tsx'
import HostVans from "./Pages/Host/HostVans"
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
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>


  </React.StrictMode>,
)
