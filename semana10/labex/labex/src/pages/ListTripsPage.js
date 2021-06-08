import React from 'react'
import useRequestData from '../hooks/useRequestData'

export default function ListTripsPage() {

    const trips = (useRequestData({},"/trips")).trips

    const moreInfos = (id) => {
        console.log("Mais infos", id)
    }

    const allTrips = trips && trips.map((expedition) => {
        return (
            <div key={expedition.id}>
                <h2>{expedition.name}</h2>
                <p>{expedition.description}</p>
                <button onClick={() => moreInfos(expedition.id)}>+ infos</button>
            </div>
        )
    })
    return (
        <div>
            <h1>Viagens:</h1>
            {allTrips}
        </div>
    )
}