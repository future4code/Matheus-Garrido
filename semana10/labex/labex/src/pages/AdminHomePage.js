import React from 'react'
import UseProtectedPage from '../hooks/useProtectedPage'
import Header from '../components/header/Header'
import ListAndDetailsTrips from '../components/ListAndDetailsTrips/ListAndDetailsTrips'
import MenuLateralAdm from '../components/MenuLateralAdm/MenuLateralAdm'
import {Main} from '../components/ListAndDetailsTrips/styled'


export default function AdminHomePage() {

    UseProtectedPage();

    return (
        <div>
            <Header />
            <Main>
                <MenuLateralAdm />
                <ListAndDetailsTrips />
            </Main> 
        </div>
    )
}