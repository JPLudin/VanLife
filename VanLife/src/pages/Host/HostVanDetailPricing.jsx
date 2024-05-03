import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanDetailPricing() {
    const { currentVan } = useOutletContext()

    return (
        <section>
            <h4>$ {currentVan.price} <span>/day</span></h4>
        </section>
    )

}