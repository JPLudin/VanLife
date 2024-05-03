import React from 'react'
import { Link } from "react-router-dom"
import "../../css/home.css"

export default function NotFound() {
    return (
        <section className='content-grid'>
           <h1>Sorry, the page you were looking for was not found</h1>
           <Link to="/" className="btn btn--black">Return to home</Link>
        </section>
    )
}