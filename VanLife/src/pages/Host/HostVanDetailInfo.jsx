import React from "react"
import { useOutletContext } from "react-router-dom"
import "../../../css/host-van-detail.css"

export default function HostVanDetailInfo() {
    const { currentVan } = useOutletContext()

    return (
        <section>
            <p><strong>Name: </strong>{currentVan.name}</p>
            <p><strong>Catetgory: </strong>{currentVan.type}</p>
            <p><strong>Description: </strong>{currentVan.description}</p>
            <p><strong>Visibilty: </strong>Public</p>
        </section>
    )
}