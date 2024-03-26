import React from 'react'
import "../../css/home.css"

export default function Home() {
    return (
        <section className='hero content-grid'>
            <div className="hero__background full-width"></div>
            <img className="hero__img full-width" src="../img/home-hero.jpg" alt="picture of a forrest" />
            <div className='hero__container'>
                <h1 className='hero__title'>You got the travel plans, we got the travel vans.</h1>
                <p className="hero__text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button className="btn btn--primary">Find your van</button>
            </div>
        </section>
    )
}