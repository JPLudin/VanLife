import React from "react"
import { Link } from "react-router-dom"
import "../../../css/host-vans.css"

export default function HostVans() {
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/host-vans-data.json")
        .then(response => response.json())
        .then(data => {
            setVans(data)
        })
    }, [])

    const hostVansElements = vans.map(van => (
        <div key={van.hostId} className="host-vans">
            <Link to={van.hostId} className="host-van">
                <img src={van.imageUrl} alt={van.name} aria-label={van.name} className="host-van__img"/>
                <div className="host-van__content">
                    <h2 className="host-van__title">{van.name}</h2>
                    <p>$ {van.price}<span>/day</span> </p>
                </div>
            </Link>
        </div>
    ))
    return (
        <section>
            <h1 className="host-vans__title">Your listed vans</h1>
            {hostVansElements}          
        </section>
    )
}