import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Components/Home.tsx"
import About from "./Components/About.tsx"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/home/about" element={<About />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>


  </React.StrictMode>,
)
