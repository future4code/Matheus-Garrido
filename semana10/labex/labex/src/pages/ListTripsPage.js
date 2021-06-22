import React, {useState} from 'react'
import Header from '../components/header/Header'
import CardsTrips from '../components/cardTrips/CardsTrips'


export default function ListTripsPage() {

    return (
        <div>
            <Header />
            <CardsTrips />
        </div>
    )
}