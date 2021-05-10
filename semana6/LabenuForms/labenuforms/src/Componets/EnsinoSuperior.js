import React from "react";

export default class EnsinoSuperior extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 2: Dados Ensino Superior</h1>
                <div>
                    <p>1. Qual o curso?</p>
                    <input type="text" placeholder="Ex.: Engenharia Civil"></input> 
                </div>
                <div>
                    <p>2. Qual a IES?</p>
                    <input placeholder="Ex.: UFCG" type="text"></input> 
                </div>
                <button onClick={this.props.mudarDePag}>Avançar</button>
            </div>
        );
    }
}