import React from 'react'
import "../../css/about.css"

export default function About() {
    return (
        <section className="about content-grid">
            <img src="../img/about-hero.jpg" alt="" className="about__img full-width" />
            <div className="about__text-container">
                <h1 className="about__title">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)</p>    
                <br/>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about__cta">
                <h2 className="about__cta-title">Your destination is waiting. Your van is ready.</h2>
                <button className="btn btn--black">Explore our vans</button>
    
            </div>
        </section>
    )
}