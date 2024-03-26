import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import "../css/index.css"
import "../css/header.css"

export default function App() {

  return (
    <BrowserRouter>
      <header className='header content-grid'>
        <nav className="navbar">
          <Link to="/" className="home-btn">#VANLIFE</Link>
          <div className='links'>
            <Link to="/about" className='link'>About</Link>

          </div>        
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer></footer>     
   </BrowserRouter>
  )
}

