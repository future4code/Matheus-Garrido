import React, { useState } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useHistory } from 'react-router'
import { goToApplicationFormPage } from '../../routes/coordinator'
import Loading from '../loading/Loading'
import PicturesPlanets from '../../constants/picturesPlanets'
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import Button from '@material-ui/core/Button';
import { Main, GridTrips, CardTrip, PicAndButton, DetailsTrip, ButtonSubm } from './styled'


export default function CardsTrips() {

    const history = useHistory();

    const [idTripSelect, setIdTripSelect] = useState();
    const [tripSelct, setTripSelct] = useState([])
    const trips = (useRequestData({}, "/trips")).trips

    const moreInfos = (id) => {
        setTripSelct(trips.filter(trip => trip.id === id))
        setIdTripSelect(id)
    }

    const tripDetails = tripSelct && tripSelct.map((detail) => {
        return (
            <div key={detail.id}>
                <p><strong>Planeta: </strong>{detail.planet}</p>
                <p><strong>Partida: </strong>{detail.date}</p>
                <p><strong>Duração: </strong>{detail.durationInDays} dias</p>
            </div>
        )
    })

    const allTrips = trips && trips.map((expedition) => {
        return (
            <div key={expedition.id}>
                {expedition.id !== idTripSelect ? (
                    <CardTrip>
                        <PicAndButton>
                            <PicturesPlanets planet={expedition.planet} />
                            <IconButton size="small" onClick={() => moreInfos(expedition.id)}><ArrowDropDownRoundedIcon color="secondary" /></IconButton>
                        </PicAndButton>
                        <DetailsTrip>
                            <h3>{expedition.name}</h3>
                            <p>{expedition.description}</p>
                        </DetailsTrip>
                        <ButtonSubm>
                            <Button variant="contained" color="secondary" onClick={() => goToApplicationFormPage(history)}>Inscreva-se</Button>
                        </ButtonSubm>
                    </CardTrip>
                ) : (
                    <CardTrip>
                        <PicAndButton>
                            <PicturesPlanets planet={expedition.planet} />
                            <IconButton size="small" onClick={() => moreInfos(undefined)}><ArrowDropUpRoundedIcon color="secondary" /></IconButton>
                        </PicAndButton>
                        <DetailsTrip>
                            <h3>{expedition.name}</h3>
                            <p>{expedition.description}</p>
                            {tripDetails}
                        </DetailsTrip>
                        <ButtonSubm>
                            <Button variant="contained" color="secondary" onClick={() => goToApplicationFormPage(history)}>Inscreva-se</Button>
                        </ButtonSubm>
                    </CardTrip>
                )}

            </div>
        )
    })

    return (
        <Main>
            <GridTrips>
                {allTrips ? allTrips : <Loading />}
            </GridTrips>
        </Main>
    )
}