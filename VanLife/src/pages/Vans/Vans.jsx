import React from "react"
import "../../../css/vans.css"
import "../../../css/index.css"
import { Link, useSearchParams } from "react-router-dom"
import { getVans  } from "../../api"

export default function Vans() {
    const [vans, setVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const filterdVans = typeFilter 
        ? vans.filter(van => van.type === typeFilter)
        : vans

    React.useEffect(() => {
       async function loadVans() {
        setLoading(true)
        try  {
            const data = await getVans()
            setVans(data)
        } catch(err) {
            setError(err)
        } finally {
            setLoading(false)
        }
        
       }
       loadVans()
    }, [])
    
    const vansElements = filterdVans.map(van => (
        <div key={van.id} className="van">
            <Link 
                to={van.id} 
                state={{ search: `?${searchParams.toString()}`, type: typeFilter }} 
                className="van__link" 
                aria-label={`View details form ${van.name}, priced at $${van.price} per day`}>
                <img className="van__img" src={van.imageUrl} alt={van.name} />
                <div className="van__text-container">
                    <div>
                        <h3 className="van__title">{van.name}</h3>
                        {
                            van.type === "simple" ? <i className="van__btn btn btn--secondary">Simple</i>
                            : van.type === "rugged" ? <i className="van__btn btn btn--dark-green">Rugged</i>
                            : <i className="van__btn btn btn--black">Luxury</i>
                        }
                    </div>
                    <p className="van__price">${van.price} <span>/day</span></p>
                </div>
            </Link>
            
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if(loading) {
        return <h1 aria-live="polite">Loading......</h1>
    }

    if(error)  {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>
    }
    
    return (
        <section className="content-grid">
            <h1>Explore our van options</h1>
            <div className="vans__btn-container">
                <button onClick={() => handleFilterChange("type", "simple")} className="btn btn--accent">Simple</button>
                <button onClick={() => handleFilterChange("type", "luxury")} className="btn btn--accent">Luxury</button>
                <button onClick={() => handleFilterChange("type", "rugged")} className="btn btn--accent">Rugged</button>
                {typeFilter ?  (
                    <button onClick={() => handleFilterChange("type", null)} className="btn btn-underline">clear filters</button>
                    ): null
                }
            </div>
            <div>
                <div className="vans">
                    {vansElements}
                </div>
            </div>
        </section>
       
        
    )
}