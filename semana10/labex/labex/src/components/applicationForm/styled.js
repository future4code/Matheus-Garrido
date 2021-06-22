import styled from "styled-components";
import backGroundImg from '../../img/ApplicationFormPage.jpg'

export const Main = styled.div`
    background-image: url(${backGroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Submtion = styled.div`
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-columns: 2fr 1fr;
    width: 600px;

    button {
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 5px;
        border: solid 1px #6a6a6a;
        background-color: #6a6a6a;
        color: #ffffff;
        cursor: pointer;
    }

`

export const Title = styled.h1`
    grid-column: 1 / span 3;
    color: #ffffff;
    text-align: center;
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

export const DescriptionTrip = styled.div`
    grid-column: 2 / span 3;
    grid-row: 2 / span 3;
    margin: 10px;
    color: #ffffff;
`

export const DetailsTrip = styled.div`
    background-color: #d0d0d0;
    height: 100%;
    border-radius: 10px;
    padding: 10px;
`