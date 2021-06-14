import styled from "styled-components";
import homeImg from "../../img/home.jpg"

export const Main = styled.div`
    background-image: url(${homeImg});
    width: 100vw;
    height: 100vh;
`
export const Logo = styled.img`
    width: 500px;
`
export const Botoes = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-evenly;

`
export const Container = styled.div`
    height: 100vh;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`