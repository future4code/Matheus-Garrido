import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfil from './img/foto-perfil.JPG';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={fotoPerfil}
          nome="Matheus Garrido" 
          descricao="Engenheiro por formação, encontrei no desenvolvimento web a melhor forma de expressar criatividade e aguçar a curiosidade. Desenvolvedor Full Stack em formação. Engenheiro de Petróleo com mestrado em Engenharia Civil. Sou apaixonado pelo processo de aprender, planejar e desenvolver."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/8/85/Bras%C3%A3o_da_UFPE.png" 
          nome="UFPE" 
          descricao="Mestrado em Eng. Civil, com pesquisa na área de otimização e gerenciamento de reservatórios de petróleo." 
        />
        
        <CardGrande 
          imagem="https://seeklogo.com/images/U/ufcg_universidade_federal_de_campina_grande-logo-E8B3971276-seeklogo.com.png" 
          nome="UFCG" 
          descricao="Graduação em Eng. de Petróleo, com habilitação em eficiência energética pelo PRH-42." 
        />
      </div>

      <div className="page-section-container">
        <h2>Informações de contato</h2>
        <CardPequeno
          imagem="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png" 
          nome="E-mail" 
          descricao="matheus.garrido@garrido.com" 
          imagemEndereco="https://www.flaticon.com/svg/vstatic/svg/684/684809.svg?token=exp=1620157338~hmac=ee38d6d58bd91bf037da16a0ba3b2d8f"
          nome2="Endereço"
          endereco="Praia de Boa Viagem, n. 001, Boa Viagem, Recife - PE."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

    </div>
  );
}

export default App;
