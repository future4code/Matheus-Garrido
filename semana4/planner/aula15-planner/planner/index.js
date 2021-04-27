function listaTarefa() {
    const tarefa = document.getElementById('tarefa')
    const diaSemana = document.getElementById('dias-semana')
    let divDiaSemana = document.getElementById(`${diaSemana.value}`)
    divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
    tarefa.value = ""


     /* switch (diaSemana.value) {
        case 'domingo':
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break

        case 'segunda':
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break
        
        case 'terca':
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break

        case 'quarta':
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break

        case 'quinta':
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break

        case 'sexta':
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break
        default:
            divDiaSemana.innerHTML += `<p>- ${tarefa.value}</p>`
            tarefa.value = ""
            break
    } */

 }