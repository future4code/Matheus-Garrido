import React from 'react'
import logo from '../../img/logo.png'

import {HeaderSection} from './styled'


export default function Header(props) {
    return (
        
        <HeaderSection>
            {props.chat ? 
                <div>
                    <button onClick={() => props.renderChat(false)}>Perfis</button>
                    <img src={logo} alt="logomarca astro match"></img>
                </div> 
                : 
                <div>
                   <img src={logo} alt="logomarca astro match"></img>
                   <button onClick={() => props.renderChat(true)}>Chat</button> 
                </div>
            }
            
        </HeaderSection>
    )
}