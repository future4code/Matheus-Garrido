import React from 'react'
import useRequestData from '../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToTripDetailsPage, goToHomePage } from '../routes/coordinator'
import UseProtectedPage from '../hooks/useProtectedPage'
import { goToCreateTripPage } from '../routes/coordinator'
import { BASE_URL } from '../constants/url'
import axios from 'axios'

export default function AdminHomePage() {

    UseProtectedPage();

    const trips = (useRequestData({}, "/trips", undefined, true)).trips
    const history = useHistory();

    const deleteTrip = (id) => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        if (window.confirm("Deseja realmente deletar?")) {
            axios
            .delete(`${BASE_URL}/trips/${id}`, header)
            .catch(() => {
                alert("Algo deu errado, tente novamente!")
            })
        }
    }

    const allTrips = trips && trips.map((expedition) => {
        return (
            <div key={expedition.id}>
                <button onClick={() => goToTripDetailsPage(history, expedition.id)}><h2>{expedition.name}</h2></button>
                <button onClick={() => deleteTrip(expedition.id)}>x</button>
            </div>
        )
    })

    return (
        <div>
            <p>AdminHomePage</p>
            <p>Olá, {localStorage.getItem("email")}</p>
            <button onClick={() => goToCreateTripPage(history)}>Cadastrar Expedição</button>
            {allTrips ? allTrips : <p>Carregando informações.</p>}
            <button onClick={() => goToHomePage(history)}>Voltar</button>
        </div>
    )
}