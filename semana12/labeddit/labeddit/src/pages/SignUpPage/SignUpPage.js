import React from 'react'
import SignUpUser from '../../components/SignUpUser/SignUpUser'
import UseUnprotectedPage from '../../hooks/useUnprotectedPage'
import HeaderUnprotectedPage from '../../components/Header/HeaderUnprotectedPage'
import PresentationRegister from '../../components/SignUpUser/PresentationRegister'
import { SignUpContainer } from './styled'

export default function SignUpPage() {

    UseUnprotectedPage()

    return (
        <div>
            <HeaderUnprotectedPage />
            <SignUpContainer>
                <PresentationRegister />
                <SignUpUser />
            </SignUpContainer>
            
        </div>
    )
}