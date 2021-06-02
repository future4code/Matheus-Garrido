//import './App.css';
import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Perfil from './Components/perfil/Perfil';
import Match from './Components/Match/Match';
import Conversas from './Components/Chat/Conversas';

const urlBase = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-garrido-paiva/"

function App() {

  const [id, setId] = useState("")
  const [chat, setChat] = useState(false)
  const [newPerfil, setNewPerfil] = useState(false)

  const idProfile = (id) => {
    setId(id)
  }

  const renderChat = (condicao) => {
    setChat(condicao)
  }

  const atualizaPerfil = () => {
    setNewPerfil(!newPerfil);
  }

  return (
    <div className="App">
      {chat ?
        <div>
          <Header
            renderChat={renderChat}
            chat={chat}
          />
          <Conversas 
            urlBase={urlBase}
          />
        </div>
        :
        <div>
          <Header
            renderChat={renderChat}
          />
          <Perfil
            urlBase={urlBase}
            idProfile={idProfile}
            newPerfil={newPerfil}
          />
          <Match
            urlBase={urlBase}
            id={id}
            atualizaPerfil={atualizaPerfil}
          />
        </div>
      }
    </div>
  );
}

export default App;
