import React from 'react'
import UseProtectedPage from '../hooks/useProtectedPage'
import TripDetails from '../components/TripDetails/TripDetaisls'
import Header from '../components/header/Header';
import MenuLateralAdm from '../components/MenuLateralAdm/MenuLateralAdm';
import {Main} from '../components/TripDetails/styled'

export default function TripDetailsPage() {

    UseProtectedPage();

    return (
        <div>
            <Header />
            <Main>
               <MenuLateralAdm />
                <TripDetails />   
            </Main>
            
        </div>
    )
}