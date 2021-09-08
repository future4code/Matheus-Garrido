import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import {BASE_URL} from '../../constants/urls'
import {useHistory} from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Button from '@material-ui/core/Button';
import {goToSignUp} from '../../routes/coordinator'
import {InputsContainer, ButtonSignUp} from './styled'


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
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("email", form.email)
            history.push("/")
            cleanFields();
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }
    
    return (
        <div>
            <InputsContainer>
                <form onSubmit={onClickLogin}>
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
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button type={"submit"} variant="contained" color="secondary" fullWidth>Entrar</Button>
                </form>  
            </InputsContainer>
            <ButtonSignUp>
                <Button type={"submit"} variant="text" color="primary" fullWidth onClick={() => goToSignUp(history)}>Ainda não possui uma conta? Cadastre-se</Button>
            </ButtonSignUp>
        </div>
    )
}
