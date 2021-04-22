
// =========== Exercícios de interpretação de código  ===========

//1
//a. false
//b. false
//c. false
//e. boolean

//2
//a. undefined
//b. null
//c. 10
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f. 9

// ============= Exercícios de escrita de código  =============

/* //1
//a
let idadeUser = Number(prompt('Qual a sua idade?'))
//b
let idadeAmigoUser = Number(prompt('Qual a idade de seu (a) amigo (a)?'))
//c
console.log('Sua idade é maior do que a do seu melhor amigo?', idadeUser>idadeAmigoUser)
//d
let diferencaIdade = idadeUser - idadeAmigoUser
console.log('Diferença de idade: ', diferencaIdade) */


/* //2
//a
let numParUser = Number(prompt('Insira um número par:'))
//b
restoDivisao = numParUser % 2
console.log('Resto da divisão: ', restoDivisao)
//c
//A divisão de qualquer número par por 2 resultará sempre em um número
//inteiro, logo, o resto será sempre 0.
//d
//Ao dividir um número ímpar por 2 o resto da operação será sempre 1. */


/* //3
//a
let listaDeTarefas = []
//b
let primTarefa = prompt('Qual a sua primeira tarefa do dia?')
let segdTarefa = prompt('Qual a sua segunda tarefa do dia?')
let tercTarefa = prompt('Qual a sua terceira tarefa do dia?')
listaDeTarefas[0] = primTarefa 
listaDeTarefas[1] = segdTarefa
listaDeTarefas[2] = tercTarefa
//c
console.log('Suas tarefas do dia são: ', listaDeTarefas)
//d
let tarFinalizada = Number(prompt('Indique qual tarefa já foi realizada:'))
//e
listaDeTarefas.splice(tarFinalizada,1)
//f
console.log('Você ainda precisa finalizar estas tarefas: ', listaDeTarefas) */


//4
let nomeUser = prompt('Qual o seu nome?')
let emailUser = prompt('Qual o seu e-mail?')

console.log(`O e-mail ${emailUser} foi cadastrado com sucesso. Seja
bem-vinda(o), ${nomeUser}!`)