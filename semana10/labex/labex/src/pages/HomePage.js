import React from 'react'
import {useHistory} from 'react-router-dom'
import {goToListTripsPage, goToLoginPage, goToAdminHomePage} from '../routes/coordinator'
import logoLabex from '../img/LABEX.png'

export default function HomePage() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    return (
        <div>
            <img src={logoLabex} alt="Logomarca Labex"></img>
            <button onClick={() => goToListTripsPage(history)}>Viajante</button>
            <button onClick={!token ? () => goToLoginPage(history) : () => goToAdminHomePage(history)}>Administrativo</button>
        </div>
    )
}