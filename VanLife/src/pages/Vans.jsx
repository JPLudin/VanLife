import React from "react"
import "../../css/vans.css"
import "../../css/index.css"

export default function Vans() {
    const [vans, setVans] = React.useState([]);
    React.useEffect(() => {
        fetch("/data.json")
        .then(response => response.json())
        .then(data => {
            setVans(data)
            console.log(data)
        })
    }, [])
    
    const vansElements = vans.map(van => (
        <div key={van.id} className="van">
            <img className="van__img" src={van.imageUrl} alt={van.name} />
            <div className="van__text-container">
                <div>
                    <h3 className="van__title">{van.name}</h3>
                    {
                        van.type === "simple" ? <button className="van__btn btn btn--secondary">Simple</button>
                        : van.type === "rugged" ? <button className="van__btn btn btn--dark-green">Rugged</button>
                        : <button className="van__btn btn btn--black">Luxury</button>
                    }
                </div>
                <p className="van__price">${van.price} <span>/day</span></p>
            </div>
            
        </div>
    ))
    
    return (
        <section className="content-grid">
            <h1>Explore our van options</h1>
            <div className="vans__btn-container">
                <button className="btn btn--accent">Simple</button>
                <button className="btn btn--accent">Luxury</button>
                <button className="btn btn--accent">Rugged</button>
                <button className="btn-underline">clear filters</button>
            </div>
            <div>
                <div className="vans">
                    {vansElements}
                </div>
            </div>
        </section>
       
        
    )
}