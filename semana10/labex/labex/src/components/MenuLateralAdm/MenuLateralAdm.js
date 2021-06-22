import React from 'react'
import { useHistory } from 'react-router'
import {goToCreateTripPage, goToAdminHomePage} from '../../routes/coordinator'
import Button from '@material-ui/core/Button';
import {Main, Logo} from './styled'

export default function MenuLateralAdm() {

    const history = useHistory()
    switch (history.location.pathname) {
        case "/admin/trips/list":
            return (
                <Main>
                    <p>Seja bem-vindo(a), {localStorage.getItem("email")}</p>
                    <Button variant="contained" color="secondary" onClick={() => goToCreateTripPage(history)}>Cadastrar Expedição</Button>
                </Main>
            )
        case "/admin/trips/create":
            return (
                <Main>
                    <p>Olá, {localStorage.getItem("email")}</p>
                    <Button variant="contained" color="secondary" onClick={() => goToAdminHomePage(history)}>Expedições Ativas</Button>

                </Main>
            )
        case `/admin/trips/${(history.location.pathname).substr(13)}`:
            return (
                <Main>
                    <p>Seja bem-vindo(a), {localStorage.getItem("email")}</p>
                    <Button variant="contained" color="secondary" onClick={() => goToCreateTripPage(history)}>Cadastrar Expedição</Button>
                </Main>
            )
        default:
            break;
    }
}