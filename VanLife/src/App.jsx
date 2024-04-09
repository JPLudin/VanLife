import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import "../css/index.css"
import "../css/header.css"
import VanDetail from './pages/VanDetail'

export default function App() {

  return (
    <BrowserRouter>
      <header className='header content-grid'>
        <nav className="navbar">
          <Link to="/" className="home-btn">#VANLIFE</Link>
          <div className='links'>
            <Link to="/about" className='link'>About</Link>
            <Link to="/vans" className='link'>Vans</Link>

          </div>        
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </main>
      <footer></footer>     
   </BrowserRouter>
  )
}

