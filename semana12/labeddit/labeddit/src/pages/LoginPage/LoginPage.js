import React from 'react'
import LoginUser from '../../components/LoginUser/LoginUser'
import Presentation from '../../components/LoginUser/Presentation'
import UseUnprotectedPage from '../../hooks/useUnprotectedPage'
import {LoginContainer} from './styled'



export default function LoginPage() {

    UseUnprotectedPage()

    return (
        <LoginContainer>
            <Presentation />
            <LoginUser />
        </LoginContainer>
    )
}