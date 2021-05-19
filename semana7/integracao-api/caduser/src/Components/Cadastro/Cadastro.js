import React from 'react'
import axios from 'axios'
import {CadastroContainer} from '../../styled'

const URL_BASE = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class Cadastro extends React.Component {

    createUser = () => {
        const header = {
            headers: {
              Authorization: "matheus-garrido-paiva"
            }
        }

        const body = {
            name: this.props.inputName,
            email: this.props.inputEmail
        }

        axios
            .post(URL_BASE, body, header)
            .then(() => {
                alert("Usuário cadastrado com sucesso")
                this.props.limpaImputs()
            })
            .catch((err) => {
                alert("Insira um e-mail válido")
            })
    }

  render() {

    return (
      <CadastroContainer>
        <div>
          <label>Nome:</label>
          <input
              type="text"
              value={this.props.inputName}
              onChange={this.props.handleName}
          ></input>
        </div>
        <div>
          <label>E-mail:</label>
          <input
              type="text"
              value={this.props.inputEmail}
              onChange={this.props.handleEmail}
              placeholder="nome@server.com"
          ></input>
        </div> 
        <div>
          <button onClick={this.createUser}>Cadastrar</button>
          <button onClick={() => this.props.getInfosUsuarios()}>Usuários Cadastrados</button>
        </div>
            
      </CadastroContainer>
    )
  }
}