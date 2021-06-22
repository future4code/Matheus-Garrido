import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export const Main = styled.div`
    display: grid;
    grid-template-columns: 280px auto;
    height: 100%;
`

export const Conteiner = styled.div`
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonsTripsDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TituloPage = styled.h1`
    color: #ffffff;
    padding-bottom: 30px;
`

export const StyledButton = withStyles({
    root: {
      width: 400
    },
  })(Button);