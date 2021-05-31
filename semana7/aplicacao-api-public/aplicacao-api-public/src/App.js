import React from "react";
import axios from "axios";
import { MainCont } from './styled'
import {Result} from './styled'
import ImagemConteiner from './img/travel.png'


export default class App extends React.Component {
  
  state = {
    paises: [],
    paisSorteado: [],
    mostraResultado: "no"
  }
  
  componentDidMount() {
    this.listaPaises();
  }

  listaPaises = () => {
    axios
      .get("https://restcountries.eu/rest/v2/")
      .then((res) => {
        this.setState({ paises: res.data})
      })
      .catch((err) => {
        alert("Aconteceu algum problema, tente novamente!")
      })
  };

  paisSorteado = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let sort = Number(Math.floor(Math.random() * (max - min + 1)) + min)
    let pais = this.state.paises[sort]
    this.setState({ paisSorteado: pais })
    this.setState({ mostraResultado: "yes" })
  }


  renderiza = () => {
    if (this.state.mostraResultado === "yes") {
      return (
        <Result>
          <p>Você irá para <strong>{this.state.paisSorteado.capital}</strong> em <strong>{this.state.paisSorteado.name}</strong></p>
          <img className="bandeira" src={this.state.paisSorteado.flag}></img>
        </Result>
      )
    }
  }

  render() {
    console.log(this.state.paisSorteado)
    return (
      <MainCont>
        <img src={ImagemConteiner}></img>
        <h1>Descubra sua próxima viagem</h1>
        <button onClick={() => this.paisSorteado(0, 250)}>Descubra</button>
        <hr/>
        {this.renderiza()}
      </MainCont>
    );
  }
}