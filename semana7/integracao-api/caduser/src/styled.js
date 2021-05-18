import styled from 'styled-components'


export const MainConteiner = styled.div`
    display: flex;
    min-height: 100vh;
    min-width: 100vh;
    align-items: center;
    justify-content: center;
`
export const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;

    div {
        padding: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    label {
        padding-right: 5px;
    }

    button {
        width: 200px;
    }

    button {
        margin-bottom: 20px;
    }

`
export const UserContainer = styled.div`
    border: solid black 1px;
    
    .usuarios {
        display: flex;
        justify-content: space-between;
        padding: 5px;
    }

    li {
        padding-right: 10px;
    }

    h3 {
        text-align: center;
    }

    .botao-voltar{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

`