import React from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import UseProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import { Conteiner, TripConteiner, TituloPage, SecondaryTitulo, TripDetail, Candidates, Checked } from './styled'
import Loading from '../loading/Loading'

export default function TripDetails() {

    UseProtectedPage();
    const history = useHistory();

    const params = useParams();

    const trip = useRequestData(
        {}, `/trip/${params.id}`,
        { auth: localStorage.getItem("token") }
    )

    const decideCandidate = (decision, id) => {
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        const body = {
            approve: decision
        }
        axios
            .put(`${BASE_URL}/trips/${params.id}/candidates/${id}/decide`, body, header)
            .then(() => {
                decision ? alert("Candidato aprovado!") : alert("Candidato excluído.")
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const pendingCandidates = trip && trip.trip && trip.trip.candidates.map((canddts) => {
        return (
            <div key={canddts.id}>
                <h3>{canddts.name}</h3>
                <p><strong>Idade: </strong>{canddts.age}</p>
                <p><strong>Profissão: </strong>{canddts.profession}</p>
                <p><strong>País: </strong>{canddts.country}</p>
                <p><strong>Perfil: </strong>{canddts.applicationText}</p>
                <button onClick={() => decideCandidate(true, canddts.id)}>Aprovar</button>
                <button onClick={() => decideCandidate(false, canddts.id)}>Reprovar</button>
            </div>
        )
    })

    const successfulCandidates = trip && trip.trip && trip.trip.approved.map((canddts) => {
        return (
            <div key={canddts.id}>
                <h3>{canddts.name}</h3>
                <p><strong>Idade: </strong>{canddts.age}</p>
                <p><strong>Profissão: </strong>{canddts.profession}</p>
                <p><strong>País: </strong>{canddts.country}</p>
                <p><strong>Perfil: </strong>{canddts.applicationText}</p>
            </div>
        )
    })

    return (
        <Conteiner>
            {trip && trip.trip ? (
                <TripConteiner>
                    <TripDetail>
                        <TituloPage>{trip.trip.name}</TituloPage>
                        <h4>{trip.trip.description}</h4>
                        <p><strong>Planeta: </strong>{trip.trip.planet}</p>
                        <p><strong>Duração: </strong>{trip.trip.durationInDays} dias</p>
                        <p><strong>Partida: </strong>{trip.trip.date}</p>
                    </TripDetail>
                    <Candidates>
                        <SecondaryTitulo>Candidatos Pendentes</SecondaryTitulo>
                        {trip.trip.candidates.length > 0 ? (pendingCandidates) : (<p>Não há candidatos pendentes</p>)}
                    </Candidates>
                    <Checked>
                        <SecondaryTitulo>Candidatos Aprovados</SecondaryTitulo>
                        {trip.trip.approved.length > 0 ? (successfulCandidates) : (<p>Não há candidatos aprovados</p>)}
                    </Checked>
                </TripConteiner>
            ) :
                <Loading />
            }
        </Conteiner>
    )
}