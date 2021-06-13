import React, {useState} from 'react'
import useRequestData from '../hooks/useRequestData'
import { useHistory } from 'react-router'
import {goToApplicationFormPage, goToHomePage} from '../routes/coordinator'

export default function ListTripsPage() {

    const history = useHistory();

    const [idTripSelect, setIdTripSelect] = useState();
    const [tripSelct, setTripSelct] = useState([])
    const trips = (useRequestData({},"/trips")).trips

    const moreInfos = (id) => {
      setTripSelct(trips.filter(trip => trip.id === id))
      setIdTripSelect(id)
    }
    
    const tripDetails = tripSelct && tripSelct.map((detail) => {
            return (
                <div key={detail.id}>                
                    <p><strong>Planeta: </strong>{detail.planet}</p>
                    <p><strong>Partida: </strong>{detail.date}</p>
                    <p><strong>Duração: </strong>{detail.durationInDays} dias</p>
                </div>
            )
    })

    const allTrips = trips && trips.map((expedition) => {
        return (
            <div key={expedition.id}>
                {expedition.id !== idTripSelect ? (
                    <div>
                        <h2>{expedition.name}</h2>
                        <p>{expedition.description}</p>
                        <button onClick={() => moreInfos(expedition.id)}>+ infos</button>
                        <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
                    </div>
                ) : (
                    <div>
                        <h2>{expedition.name}</h2>
                        <p>{expedition.description}</p>
                        <button onClick={() => moreInfos(undefined)}>- infos</button>
                        {tripDetails}
                        <button onClick={() => goToApplicationFormPage(history)}>Inscreva-se</button>
                    </div>
                )}
                
            </div>
        )
    })

    return (
        <div>
            <h1>Viagens:</h1>
            {allTrips}
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>
    )
}