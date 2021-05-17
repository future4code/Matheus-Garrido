import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        /* {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Texto da segunda tarefa',
          completa: true
        } */
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    const stringTarefas = localStorage.getItem("tarefas");
    const objetoTarefa = JSON.parse(stringTarefas)
    if (stringTarefas) {
      this.setState({ tarefas: objetoTarefa });
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState({tarefas: novaListaTarefas})
  }

  selectTarefa = (id) => {
    const tarefaSelecionada = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const newTask = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return newTask
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: tarefaSelecionada})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  deletarTarefa = (id) => {
    console.log("Apagar mensagem:", id)
    const listaTarefasAtual = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({ tarefas: listaTarefasAtual })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.deletarTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
