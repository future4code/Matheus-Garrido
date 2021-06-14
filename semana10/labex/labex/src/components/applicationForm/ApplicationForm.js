import React, {useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/url'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import Countries from '../../constants/countries'
import { useHistory } from 'react-router-dom'
import {Title, Main, Submtion, Form, DescriptionTrip, DetailsTrip} from './styled'
import Button from '@material-ui/core/Button';


export default function ApllicationForm() {

    const history = useHistory();
    const [idSelect, setIdSelect] = useState("")
    const [tripSelct, setTripSelct] = useState([])

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const trips = (useRequestData({},"/trips")).trips
    const allTrips = trips && trips.map((expedition) => {
        return (
            <option key={expedition.name} value={expedition.id}>{`${expedition.name} - ${expedition.planet}`}</option>
        )
    })
    const idTripSelect = (e) => { 
        setIdSelect(e.target.value)
        setTripSelct(trips.filter(trip => trip.id === e.target.value))
    }

    const tripDetails = tripSelct && tripSelct.map((detail) => {
        return (
            <DetailsTrip key={detail.id}>
                <h3>{detail.name}</h3>
                <hr/>
                <p>
                    {`${detail.description} em ${detail.planet}. 
                    A partida será no dia ${detail.date}, 
                    esta expedição terá uma duração de 
                    ${detail.durationInDays} dias. Venha conosco!`}
                </p>
            </DetailsTrip>
        )
    })

    const applyToTrip = (event) => {
        event.preventDefault();
        const body = form;
        axios
        .post(`${BASE_URL},/trips/${idSelect}/apply`, body)
        .then(() => {
            alert("Inscrição submetida com sucesso!")
            cleanFields();
        })
        .catch((err) => {
            alert(err.response.data.message)
        })

    }
   
    return (
        <Main>
        <Submtion>
            <Title>Desvende o Universo</Title>
            <Form onSubmit={applyToTrip}>
                <select 
                    defaultValue 
                    onChange={idTripSelect} 
                    required
                >
                    {allTrips}
                </select>
                <input
                    placeholder={"Nome do candidato"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                    pattern={"^.{5,}"}
                    title={"O título deve conter ao menos 5 letras"}
                />
                <input
                    placeholder={"Idade"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    type={"number"}
                    min={18}
                />
                <textarea
                    placeholder={"Por que você é um bom candidato?"}
                    rows={"4"}
                    cols={"30"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}"}
                    title={"Deve conter no mínimo 30 letras"}
                />
                <input
                    placeholder={"Sua profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}"}
                    title={"Deve conter ao menos 10 letras"}
                />
                <Countries name={"country"} onChange={onChange}/>
                <button>Submeter Inscrição</button>
            </Form>
            <DescriptionTrip>
                {tripDetails}
            </DescriptionTrip>
            
        </Submtion>       
        </Main>
    )
}