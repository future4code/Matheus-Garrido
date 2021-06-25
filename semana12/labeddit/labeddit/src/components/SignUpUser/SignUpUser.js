import React from 'react'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {InputsContainer} from './styled'

export default function LoginUser() {

    const history = useHistory();

    const { form, onChange, cleanFields } = useForm({
        username: "",
        email: "",
        password: ""
    })

    const onClickSignUp = (event) => {
        event.preventDefault();
        const body = form;
        axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/")
            cleanFields();
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    
    return (
        <InputsContainer>
            <form onSubmit={onClickSignUp}>
                <TextField
                    label="Nome de Usuário"
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    required
                    inputProps={{ pattern: "^.{5,}" }}
                    helperText={"Deve conter ao menos 5 letras"}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="E-mail"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                    type={"email"}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Senha"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                    type="password"
                    inputProps={{ pattern: "^.{8,}" }}
                    helperText={"Deve conter ao menos 8 caracteres"}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button type={"submit"} variant="contained" color="secondary" fullWidth>Cadastre-se</Button>
            </form>
        </InputsContainer>
    )
}