import styled from "styled-components";

export const Main = styled.div`
    display: grid;
    grid-template-columns: 280px auto;
    height: 100%;
`

export const Form = styled.form`
    grid-column: 1 / 2;
    grid-row: 2 / span 3;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #d0d0d0;
    margin: 20px;
    border-radius: 10px;

    input {
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 5px;
        border: solid 1px #ffffff;
    }

    select {
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 5px;
        border: solid 1px #ffffff;
    }

    textarea {
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 5px;
        border: solid 1px #ffffff;
    }
`

export const Conteiner = styled.div`
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TituloPage = styled.h1`
    color: #ffffff;
    padding-bottom: 30px;
`
