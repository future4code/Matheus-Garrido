import React from "react";

export default class DadosGerais extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 1: Dados Gerais</h1>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input type="text" placeholder="Nome e Sobrenome"></input> 
                </div>
                <div>
                    <p>2. Qual a sua idade?</p>
                    <input type="number"></input> 
                </div>
                <div>
                    <p>3. Qual o seu e-mail?</p>
                    <input placeholder="Ex.: user@server.com" type="text"></input> 
                </div>
                <div>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>
                </div>
                <button onClick={this.props.mudarDePag}>Avançar</button>    
            </div>
        );
    }
}