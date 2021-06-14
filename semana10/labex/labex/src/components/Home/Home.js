import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToListTripsPage, goToLoginPage, goToAdminHomePage } from '../../routes/coordinator'
import logoLabex from '../../img/LABEX.png'
import { Main, Logo, Container, Botoes } from './styled'
import Button from '@material-ui/core/Button';

export default function Home() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    return (
        <Main>
            <Container>
                <div>
                    <Logo src={logoLabex} alt="Logomarca Labex"></Logo>
                </div>
                <Botoes>
                    <Button variant="outlined" color="primary" onClick={() => goToListTripsPage(history)}>Viajante</Button>
                    <Button variant="outlined" color="primary" onClick={!token ? () => goToLoginPage(history) : () => goToAdminHomePage(history)}>Administrativo</Button>
                </Botoes>
            </Container>
        </Main>
    )
}