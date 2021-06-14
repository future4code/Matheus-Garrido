import styled from "styled-components";

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
export const TripConteiner = styled.div`
    display:grid;
    max-width: 70%;
    column-gap: 20px;
    row-gap: 20px
`

export const TituloPage = styled.h1`
    color: #ffffff;
    padding-bottom: 30px;
`

export const SecondaryTitulo = styled.h1`
    color: #ffffff;
    padding-bottom: 30px;
`

export const TripDetail = styled.div`
    text-align: center;
    grid-column: 1 / 3;
    grid-row: 1 /2;
   
`
export const Candidates = styled.div`
    text-align: center;
    grid-column: 1 / 2;
    grid-row: 2 /3;
`

export const Checked = styled.div`
    text-align: center;
    grid-column: 2 / 3;
    grid-row: 2 /3;
`