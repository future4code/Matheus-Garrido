import React from 'react'
import logoPrincipal from '../../assets/logo-typo.png'
import {PresentationContainer} from './styled'


export default function PresentationRegister() {
    return (
        <PresentationContainer>
            <img src={logoPrincipal} />
            <h3>Venha fazer parte do LabEddit, e se conecte com os assuntos mais importantes do momento.</h3>
        </PresentationContainer>
    )
}