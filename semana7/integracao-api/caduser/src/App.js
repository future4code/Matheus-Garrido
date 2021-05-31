import React from 'react'
import Cadastro from './Components/Cadastro/Cadastro'
import Usuarios from './Components/Usuarios/Usuarios'
import DetalhesUser from './Components/Detalhes/DetalhesUser'
import axios from 'axios'
import { MainConteiner } from './styled'

const URL_BASE = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {

  state = {
    infosUsuarios: [],
    inputName: "",
    inputEmail: "",
    telaRenderizada: "cadastro",
    idUserMoreInfos: undefined
  };

  getInfosUsuarios = () => {
    this.setState({ telaRenderizada: "usuarios"})

    const header = {
      headers: {
        Authorization: "matheus-garrido-paiva"
      }
    }

    axios
      .get(URL_BASE, header)
      .then((res) => {
        this.setState({ infosUsuarios: res.data})
      })
      .catch((err) => {
        alert(err)
      })
    
  };

  handleName = (e) => {
    this.setState({ inputName: e.target.value }); 
  };

  handleEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };

  limpaImputs = () => {
    this.setState({ inputName: "" })
    this.setState({ inputEmail: "" })
  }

  changeTelaCadastro = () => {
    this.setState({ telaRenderizada: "cadastro"})
  }

  changeTelaMoreInfos = (id) => {
    this.setState({ telaRenderizada: "moreInfos"})
    this.setState({ idUserMoreInfos: id})
  }

  

  render() {

    switch (this.state.telaRenderizada) {
      case "cadastro":
        return (
          <MainConteiner>
          <Cadastro
            getInfosUsuarios={this.getInfosUsuarios}
            inputName={this.state.inputName}
            inputEmail={this.state.inputEmail}
            handleName={this.handleName}
            handleEmail={this.handleEmail}
            limpaImputs={this.limpaImputs}
          />
        </MainConteiner>
        )
      case "usuarios":
          return (
            <MainConteiner>
              <Usuarios
              infosUsuarios={this.state.infosUsuarios}
              getInfosUsuarios={this.getInfosUsuarios}
              changeTelaCadastro={this.changeTelaCadastro}
              changeTelaMoreInfos={this.changeTelaMoreInfos}
              />
          </MainConteiner>
          )
        case "moreInfos":
            return (
              <DetalhesUser
              idUserMoreInfos={this.state.idUserMoreInfos}
              getInfosUsuarios={this.getInfosUsuarios}
              />
            )
    
      default:
        break;
    }
  }
}

