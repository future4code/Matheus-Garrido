import React from 'react'
import logoPrincipal from '../../assets/logo-typo.png'
import {PresentationContainer} from './styled'


export default function Presentation() {
    return (
        <PresentationContainer>
            <img src={logoPrincipal} />
            <h3>O LabEddit ajuda você a se conectar e compartilhar com as pessoas os assuntos mais importantes do momento.</h3>
        </PresentationContainer>
    )
}