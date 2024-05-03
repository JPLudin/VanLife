import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import "../../../css/host-van-detail.css"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch("/host-vans-data.json")
        .then(response => response.json())
        .then(data => {
            const foundVan = data.find(van => van.hostId === id)
            setCurrentVan(foundVan)
        })
    }, [id])

    return (
        <section>
            <Link to="../" relative="path">
                <button className="host-van-detail__btn btn-underline van-detail__back-btn">Back to all vans</button>
            </Link>
            <div className="host-van-detail">
                {
                    currentVan ? ( 
                        <div className="host-van-detail__content medium-width">
                            <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-detail__img"/>
                            <div className="host-van-detail__content-container">
                                <div className="host-van-detail__btn-container">
                                    {currentVan.type === "simple" ? <button className="btn btn--secondary">Simple</button>
                                    : currentVan.type === "rugged" ? <button className="btn btn--dark-green">Rugged</button>
                                    :  <button className="btn btn--black">Luxury</button>
                                    }
                                </div>
                                <h2>{currentVan.name}</h2>
                                <p><strong>${currentVan.price} </strong><span>/day</span> </p>
                            </div>
                        </div>
                    ) : <h2>Loading....</h2>
                }
                <nav className="host-van-detail__nav">
                    <NavLink to="." end className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Details</NavLink>
                    <NavLink to="pricing" className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Pricing</NavLink>
                    <NavLink to="photos" className={({isActive}) => isActive ? 'host-layout__link active-link btn-underline' : 'host-layout__link btn-underline'}>Photos</NavLink>
                </nav>
                <Outlet context={{currentVan}}/>
            </div>
        </section>
    )
}