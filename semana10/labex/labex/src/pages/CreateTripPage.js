import React from 'react'
import UseProtectedPage from '../hooks/useProtectedPage'
import FormCreateTrips from '../components/FormCreateTrip/FormCreateTrip'
import Header from '../components/header/Header';
import MenuLateralAdm from '../components/MenuLateralAdm/MenuLateralAdm'
import {Main} from '../components/FormCreateTrip/styled'



export default function CreateTripPage() {

    UseProtectedPage();
    
    return (
        <div>
            <Header />
            <Main>
               <MenuLateralAdm />
                <FormCreateTrips /> 
            </Main>
            
        </div>
    )
}