import React from 'react'
import logoLabex from '../img/LABEX.png'

export default function HomePage() {
    return (
        <div>
            <img src={logoLabex} alt="Logomarca Labex"></img>
            <button>Viajante</button>
            <button>Administrativo</button>
        </div>
    )
}