import React from "react"
import styled from "styled-components";
import DadosGerais from './Componets/DadosGerais';
import EnsinoMedio from "./Componets/EnsinoMedio";
import EnsinoSuperior from "./Componets/EnsinoSuperior";
import Finalizacao from "./Componets/Finalizacao";
import Inicializacao from "./Componets/Inicializacao";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

export default class App extends React.Component {
  state ={
    etapa: 0
  };

  trocaDePagina = () => {
    switch (this.state.etapa) {
      case 0:
        return this.setState({ etapa: 1 })
      case 1: 
        return this.setState({ etapa: 2 })
      case 2: 
        return this.setState({ etapa: 3 })
      case 3: 
        return this.setState({ etapa: 4 })
      default:
        break;
    }
  } 

  render() {

    const renderizaPagina = () => {
      switch (this.state.etapa) {
        case 0:
          return <Inicializacao mudarDePag={this.trocaDePagina}/>
        case 1: 
          return <DadosGerais mudarDePag={this.trocaDePagina}/>
        case 2: 
          return <EnsinoSuperior mudarDePag={this.trocaDePagina}/>
        case 3: 
          return <EnsinoMedio mudarDePag={this.trocaDePagina}/>
        case 4: 
          return <Finalizacao mudarDePag={this.trocaDePagina}/>
        default:
          break;
      }
    }

    return (
      <MainContainer>
        {renderizaPagina()}
      </MainContainer>
    )
  }
}

