import React from 'react'
import Cadastro from './Components/Cadastro/Cadastro'
import Usuarios from './Components/Usuarios/Usuarios'
import axios from 'axios'
import { MainConteiner } from './styled'

const URL_BASE = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {

  state = {
    infosUsuarios: [],
    inputName: "",
    inputEmail: "",
    telaUserCadastrados: 0,
    voltarTelaCadastro: 1
  };

  getInfosUsuarios = () => {

    this.setState({ telaUserCadastrados: 1 })
    this.setState({ voltarTelaCadastro: 1 })

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

  excluirUsuario = (idUser) => {
    const header = {
      headers: {
        Authorization: "matheus-garrido-paiva"
      }
    }

    if (window.confirm('Tem certeza que deseja deletar este usuário?')) {
      axios
      .delete(`${URL_BASE}/${idUser}`, header)
      .then((res) => {
        alert('Usuário deletado')
        this.getInfosUsuarios();
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  changeTela = () => {
    this.setState({ voltarTelaCadastro: 0 })
    this.setState({ telaUserCadastrados: 0 })
  }
  

  render() {
    console.log('oi')

    if (this.state.telaUserCadastrados === 0 || this.state.voltarTelaCadastro === 0) {
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
    } else if (this.state.telaUserCadastrados === 1) {
      return (
        <MainConteiner>
          <Usuarios
            infosUsuarios={this.state.infosUsuarios}
            getInfosUsuarios={this.getInfosUsuarios}
            excluirUsuario={this.excluirUsuario}
            changeTela={this.changeTela}
          />
        </MainConteiner>
      )
    }
  }
}

