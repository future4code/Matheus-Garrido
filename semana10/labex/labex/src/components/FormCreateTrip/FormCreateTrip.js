import React from 'react'
import {BASE_URL} from '../../constants/url'
import axios from 'axios'
import UseProtectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import Planets from '../../constants/planets';
import {useHistory} from 'react-router-dom'
import {Form, Conteiner, TituloPage} from './styled'

export default function FormCreateTrips() {

    UseProtectedPage();
    const history = useHistory();

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const creatTrip = (event) => {
        event.preventDefault();
        const body = form;
        const header = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }
        axios
        .post(`${BASE_URL}/trips`, body, header)
        .then(() => {
            alert("Missão criada com sucesso")
            cleanFields();
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    const now = new Date();
    const min = `${now.getFullYear()}-${now.getMonth()+1 < 10 ? `0${now.getMonth()+1}` : now.getMonth()+1}-${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}`;

    return (
        <Conteiner>
            <TituloPage>Criar nova expedição</TituloPage>
            <Form onSubmit={creatTrip}>
                <input
                    placeholder={"Título"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                    pattern={"^.{5,}"}
                    title={"O título deve conter ao menos 5 letras"}
                />
                <Planets name={"planet"} onChange={onChange}/>
                <input
                    placeholder={"Patida"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    type="date"
                    min={min}
                />
                <textarea 
                    placeholder={"Descrição"}
                    rows={"4"}
                    cols={"30"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}"}
                    title={"Deve conter no mínimo 30 letras"}
                />
                <input
                    placeholder={"Duração"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                    type={"number"}
                    min={50}
                />
                <button>Cadastrar Missão</button>
            </Form>
        </Conteiner>
    )
}