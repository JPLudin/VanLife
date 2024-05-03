import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import "../../../css/van-detail.css"
import "../../../css/index.css"

export default function VanDetai() {
    const { id } = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)
    
    React.useEffect(() => {
        fetch("/data.json")
        .then(response => response.json())
        .then(data => {
            const foundVan = data.find(van => van.id === id)
            setVan(foundVan)
        })
    }, [id])

    if (!van) {
        return <div>Loading...</div>
    }

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <section className="van-detail content-grid">
            {
                van ? (
                    <div>
                        <Link to={`..${location.state.search}`} relative="path">
                            <button className="btn-underline van-detail__back-btn">
                                {
                                    search ? `Back to all ${type} vans` : "Back to all vans"
                                }
                                </button>
                        </Link>
                        <div className="van-detail medium-width">
                            <img src={van.imageUrl} alt={van.name} className="van-detail__img"/>
                                {van.type === "simple" ? <button className="btn btn--secondary">Simple</button>
                                : van.type === "rugged" ? <button className="btn btn--dark-green">Rugged</button>
                                :  <button className="btn btn--black">Luxury</button>
                                }
                            <h2>{van.name}</h2>
                            <p>${van.price} <span>/day</span> </p>
                            <p>{van.description}</p>
                        </div>
                    </div>
                    
                ) : <h2>Loading....</h2>
            }
            <button className="btn btn--primary">Rent this van</button>
        </section>
    )
}