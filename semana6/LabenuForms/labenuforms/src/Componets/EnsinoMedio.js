import React from "react";

export default class EnsinoMedio extends React.Component {
    render() {
        return (
            <div>
                <h1>ETAPA 3: Informações Gerais de Escolaridade</h1>
                <div>
                    <p>1. Por que você não terminou um curso de graduação?</p>
                    <input type="text"></input> 
                </div>
                <div>
                    <p>2. Você fez algum curso complementar?</p>
                    <select>
                        <option>Curso técnico</option>
                        <option>Cursos de inglês</option>
                        <option>Não fiz curso complementar</option>
                    </select>
                </div>
                <button onClick={this.props.mudarDePag}>Avançar</button>
            </div>
        );
    }
}