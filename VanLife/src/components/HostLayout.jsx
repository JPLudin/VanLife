import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import "../../css/host-layout.css"
import "../../css/index.css"

export default function HostLayout() {
    return ( 
        <div className="content-grid">
            <nav className="host-layout">
                <NavLink to="." end className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Dashboard</NavLink>
                <NavLink to="income" className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Income</NavLink>
                <NavLink to="vans" className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Vans</NavLink>
                <NavLink to="reviews" className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Reviews</NavLink>
            </nav>
            <Outlet />
        </div>
        
    )
}