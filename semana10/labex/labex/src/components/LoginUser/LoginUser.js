import React from 'react'
import {BASE_URL} from '../../constants/url'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm'
import {goToHomePage} from '../../routes/coordinator'
import {Main, Container, Logo, Form, Botoes} from './styled'
import logoLabex from '../../img/LABEX.png'
import Button from '@material-ui/core/Button';


export default function LoginUser() {

    const history = useHistory();

    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const onClickLogin = (event) => {
        event.preventDefault();
        const body = form;
        axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("email", form.email)
            history.push("/admin/trips/list")
            cleanFields();
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    
    return (
        <Main>
            <Container>
                <div>
                    <Logo src={logoLabex} alt="Logomarca Labex"></Logo>
                </div>
                <Form onSubmit={onClickLogin}>
                    <input
                        placeholder="E-mail"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                        type={"email"}
                    />
                    <input
                        placeholder="Senha"
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        required
                        type="password"
                    />
                    <button>Entrar</button>
                </Form>
                <Botoes>
                   <Button variant="outlined" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
                </Botoes>  
            </Container>
            
        </Main>
    )
}