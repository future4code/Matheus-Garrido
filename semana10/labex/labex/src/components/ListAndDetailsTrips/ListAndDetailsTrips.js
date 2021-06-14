import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router-dom'
import { goToTripDetailsPage } from '../../routes/coordinator'
import UseProtectedPage from '../../hooks/useProtectedPage'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import {Conteiner, ButtonsTripsDetails, StyledButton, TituloPage} from './styled'
import Loading from '../loading/Loading'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

export default function ListAndDetailsTrips() {

    UseProtectedPage();

    const trips = (useRequestData({}, "/trips", undefined, true)).trips
    const history = useHistory();

    const deleteTrip = (id) => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        if (window.confirm("Deseja realmente deletar?")) {
            axios
            .delete(`${BASE_URL}/trips/${id}`, header)
            .catch(() => {
                alert("Algo deu errado, tente novamente!")
            })
        }
    }

    const allTrips = trips && trips.map((expedition) => {
        return (
            <ButtonsTripsDetails key={expedition.id}>
                <StyledButton variant="outlined" color="primary" onClick={() => goToTripDetailsPage(history, expedition.id)}><h4>{expedition.name}</h4></StyledButton>
                <IconButton fontSize="large" color="primary" onClick={() => deleteTrip(expedition.id)}><DeleteForeverRoundedIcon /></IconButton>
            </ButtonsTripsDetails>
        )
    })

    return (
        <Conteiner>
            <TituloPage>Expedições Ativas</TituloPage>
            {allTrips ? allTrips : <Loading />}
        </Conteiner>
    )
}