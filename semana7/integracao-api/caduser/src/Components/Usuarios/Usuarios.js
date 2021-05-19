import React from 'react'
import {UserContainer} from '../../styled'

export default class Usuarios extends React.Component {

  render() {

    const nomeUsuarios = this.props.infosUsuarios.map((user) => {
        return (
            <div className="usuarios"  key={user.id}>
              <li>{user.name}</li>
              <div>
                <button onClick={() => this.props.excluirUsuario(user.id)}>Deletar</button>
              </div>
            </div>
        )    
    })

    return (

      <UserContainer>
          <h3>Usuários Cadastrados:</h3>
          {nomeUsuarios}
          <div className="botao-voltar">
            <button onClick={() => this.props.changeTela()}>Voltar</button> 
          </div>
            
      </UserContainer>
    )
  }
}