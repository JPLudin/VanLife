import React from "react"
import { Link, NavLink } from "react-router-dom"
import "../../css/header.css"
import "../../css/index.css"

export default function Header() {

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }

    return (
        <header className='header content-grid'>
            <nav className="navbar">
                <NavLink to="/" className="home-btn">#VANLIFE</NavLink>
                <div className='links'>
                    <NavLink to="/host" className={({isActive}) => isActive ? 'active-link link' : 'link'}>Host</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? 'active-link link' : 'link'}>About</NavLink>
                    <NavLink to="/vans" className={({isActive}) => isActive ? 'active-link link' : 'link'}>Vans</NavLink>
                    <Link to="login" className="link">Login</Link>

                </div>     
                <button onClick={fakeLogOut}>x</button>   
            </nav>
        </header>
    )

}