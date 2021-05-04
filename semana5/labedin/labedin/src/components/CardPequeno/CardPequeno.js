import React from 'react';
import styled from 'styled-components';

const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const IconesContainer = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 0%;
`

const TituloCard = styled.h4`
    margin-bottom: 15px;
`

const DadosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <IconesContainer src={ props.imagem } />
            <DadosContainer>
                <TituloCard>{ props.nome }</TituloCard>
                <p>{ props.descricao }</p>
            </DadosContainer>
            <IconesContainer src={ props.imagemEndereco } />
            <DadosContainer>
                <TituloCard>{ props.nome2 }</TituloCard>
                <p>{ props.endereco }</p>
            </DadosContainer>
        </LittleCardContainer>
    )
}

export default CardPequeno;