import React from 'react'
import loadingLogo from '../../img/loading.gif'
import {AnimateGif} from './styled'

export default function Loading() {
    return (
        <AnimateGif>
            <img src={loadingLogo} alt="Logo labex animada"/>
        </AnimateGif>
    
    )
}