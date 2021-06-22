import React from 'react'
import logoLabex from '../../img/LABEX.png'
import { useHistory } from 'react-router'
import {goToApplicationFormPage, goToHomePage, goToListTripsPage, goToAdminHomePage, goToLoginPage} from '../../routes/coordinator'
import Button from '@material-ui/core/Button';
import {Main, Logo, UserLoggin} from './styled'

export default function Header() {

    const history = useHistory()

    const logoutUser = (history) => {
        localStorage.clear("token")
        goToLoginPage(history);
    }
    
    switch (history.location.pathname) {
        case "/trips/list":
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoLabex}/> </a>
                    <Button variant="contained" color="secondary" onClick={() => goToApplicationFormPage(history)}>Vamos ao espaço</Button>
                </Main>
            )
        case "/trips/application":
            return (
                <Main>
                    <a onClick={() => goToListTripsPage(history)}><Logo src={logoLabex}/> </a>
                </Main>
            )
        case "/admin/trips/list":
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoLabex}/> </a>
                    <UserLoggin>
                       <p>Olá, {localStorage.getItem("email")}</p>
                        <Button variant="contained" color="secondary" onClick={() => logoutUser(history)}>Logout</Button> 
                    </UserLoggin>
                    
                </Main>
            )
        case "/admin/trips/create":
            return (
                <Main>
                    <a onClick={() => goToAdminHomePage(history)}><Logo src={logoLabex}/> </a>
                    <UserLoggin>
                       <p>Olá, {localStorage.getItem("email")}</p>
                        <Button variant="contained" color="secondary" onClick={() => logoutUser(history)}>Logout</Button> 
                    </UserLoggin>
                </Main>
            )
        case `/admin/trips/${(history.location.pathname).substr(13)}`:
            return (
                <Main>
                    <a onClick={() => goToAdminHomePage(history)}><Logo src={logoLabex}/> </a>
                    <UserLoggin>
                       <p>Olá, {localStorage.getItem("email")}</p>
                        <Button variant="contained" color="secondary" onClick={() => logoutUser(history)}>Logout</Button> 
                    </UserLoggin>
                </Main>
            )
        default:
            return (
                <Main>
                    <a onClick={() => goToHomePage(history)}><Logo src={logoLabex}/> </a>
                    <Button variant="contained" color="secondary" onClick={() => goToApplicationFormPage(history)}>Vamos ao espaço</Button>
                </Main>
            )
    }
}