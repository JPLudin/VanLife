import React from "react"
import { useOutletContext } from "react-router-dom"
import "../../../css/host-van-detail.css"

export default function HostVanDetailPhotos() {
    const { currentVan } = useOutletContext()

    return (
        <section>
            <img src={currentVan.imageUrl} alt={currentVan.name} className="host-van-detail__img"/>
        </section>
    )
}