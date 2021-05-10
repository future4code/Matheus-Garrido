import React from "react";

export default class Inicializacao extends React.Component {
    render() {
        return (
            <div>
                <h1>Olá, seja bem-vindo(a). Queremos te conhecer melhor.</h1>
                <h4>Vamos lá, preencha nosso formulário:</h4>
                <button onClick={this.props.mudarDePag}>Inciar</button> 
            </div>
        );
    }
}