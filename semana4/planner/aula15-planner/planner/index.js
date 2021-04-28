let identificadorTarefa = 1
let horaInicial = 6
let horaFinal = 22

function horarios() {
    const diasSemana = document.getElementsByClassName("semana")
    for (let i = 0; i < diasSemana.length; i++) {
        const dia = diasSemana[i]
        const identificador = dia.getElementsByTagName("div")[0]
        for (let n = horaInicial; n <= horaFinal; n++) {
            identificador.innerHTML += `<div id="${identificador.id}${n}">${n}:00</div>`
        }  
    }
}


function listaTarefa() {
    const tarefa = document.getElementById('tarefa')
    const diaSemana = document.getElementById('dias-semana')
    const horario = document.getElementById("horario")
 
 if (tarefa.value !=="") {
    let divDiaSemana = document.getElementById(`${diaSemana.value}${horario.value}`)
    divDiaSemana.innerHTML += `<p id="tarefa${identificadorTarefa}" onclick="sublinhaTarefa('tarefa${identificadorTarefa}')">- ${tarefa.value}</p>`
    tarefa.value = ""
    identificadorTarefa++
 } else {
     alert('Você não informou nenhuma tarefa. Informe uma atividade!')
 }
}

function sublinhaTarefa(idtAtividade) {
    const atvidade = document.getElementById(`${idtAtividade}`)
    atvidade.innerHTML = atvidade.textContent.strike()
}

function zerarAtividades() {
    const diasSemana = document.getElementsByClassName("semana")
    for (let i = 0; i < diasSemana.length; i++) {
        const dia = diasSemana[i]
        const identificador = dia.getElementsByTagName("div")[0]
        identificador.innerHTML = ""
    }
    horarios()
}


