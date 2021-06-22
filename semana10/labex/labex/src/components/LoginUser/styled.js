import styled from "styled-components";
import homeImg from "../../img/LoginPage.jpg"

export const Main = styled.div`
    background-image: url(${homeImg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`
export const Logo = styled.img`
    width: 500px;
`

export const Botoes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const Container = styled.div`
    height: 100vh;
    padding-left: 50px;
    justify-content: center;
    display: grid;
`
export const Form = styled.form`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;

    input {
        margin-bottom: 10px;
        border-radius: 10px;
        padding: 5px;
        border: solid 1px #ffffff;
    }

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