import React from 'react'
import axios from 'axios'
import {UserContainer} from '../../styled'

const URL_BASE = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class Usuarios extends React.Component {

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
        this.props.getInfosUsuarios();
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  render() {

    const nomeUsuarios = this.props.infosUsuarios.map((user) => {
        return (
            <div className="usuarios"  key={user.id}>
              <li>{user.name}</li>
              <div>
                <button onClick={() => this.props.changeTelaMoreInfos(user.id)}>Mais Informações</button>
                <button onClick={() => this.excluirUsuario(user.id)}>Deletar</button>
              </div>
            </div>
        )    
    })

    return (

      <UserContainer>
          <h3>Usuários Cadastrados:</h3>
          {nomeUsuarios}
          <div className="botao-voltar">
            <button onClick={() => this.props.changeTelaCadastro()}>Voltar</button> 
          </div> 
      </UserContainer>
    )
  }
}