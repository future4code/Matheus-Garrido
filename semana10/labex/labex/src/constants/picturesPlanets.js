import React from 'react'
import jupiter from '../img/planets/jupiter.jpg'
import marte from '../img/planets/marte.jpg'
import mercurio from '../img/planets/mercurio.jpg'
import netuno from '../img/planets/netuno.jpg'
import plutao from '../img/planets/plutao.jpg'
import saturno from '../img/planets/saturno.jpg'
import urano from '../img/planets/urano.jpg'
import venus from '../img/planets/venus.jpg'
import styled from 'styled-components'

export const PlanetImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`

export default function PicturesPlanets (props) {
    switch (props.planet) {
        case "Mercúrio" || "Mercurio":
            return <PlanetImg src={mercurio}></PlanetImg>
        case "Marte":
            return <PlanetImg src={marte}></PlanetImg>
        case "Júpiter" || "Jupiter":
            return <PlanetImg src={jupiter}></PlanetImg>
        case "Netuno":
            return <PlanetImg src={netuno}></PlanetImg>
        case "Plutão" || "Plutao":
            return <PlanetImg src={plutao}></PlanetImg>
        case "Saturno":
            return <PlanetImg src={saturno}></PlanetImg> 
        case "Urano":
            return <PlanetImg src={urano}></PlanetImg>
        case "Vênus" || "Venus":
            return <PlanetImg src={venus}></PlanetImg>   
        default:
            return <PlanetImg src={netuno}></PlanetImg>
    }
}