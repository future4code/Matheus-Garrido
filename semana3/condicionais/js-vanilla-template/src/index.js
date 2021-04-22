// +++++++++++++++++++ EXERCICIOS DA AULA 11 ++++++++++++++++++++
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


/* //4
let nomeUser = prompt('Qual o seu nome?')
let emailUser = prompt('Qual o seu e-mail?')

console.log(`O e-mail ${emailUser} foi cadastrado com sucesso. Seja
bem-vinda(o), ${nomeUser}!`) */




// +++++++++++++++++++ EXERCICIOS DA AULA 12 ++++++++++++++++++++

// =========== Exercícios de interpretação de código  ===========

//1
/* O código recebe uma string do usuário e a tranforma em um número, 
depois faz uma verificação baseada no resto da divisão desse número
por dois. O código pode ser usado para testar se um determinado número
é par ou ímpar, qualquer número par dividido por 2, o resto da divisão
é zero. Logo, o console imprime "Passou no teste" para números pares e 
"Não passou no teste" para número ímpares.*/

//2
//a
/* O código em questão fornece o valor da fruta escolhida pelo usuário*/
//b
/*O preço da frura Maçã é R$ 2.25 */
//c
/*O preço da frura Maçã é R$ 5 */

//3
//a
/* A primeira linha de código pede para que o usuário forneça um dado, 
que será uma string por default, e será transformado em número, e então
armazenado na variável "numero". */
//b
/* Caso digite 10: Esse número passou no teste.
Caso digite -10: error*/
//c
/*Haverá erro, uma vez que a varável mensagem está sendo definida no
filho, e não estará disponível para o pai*/


// =========== Exercícios de escrita de código  ===========

//4

/* let idadeUser = Number(prompt('Qual a sua idade?'))

if (idadeUser>=18) {
    console.log('Você pode dirigir.')
} else {
    console.log('Você não pode dirigir.')
} */

//5

/* let turno = prompt('Em qual turno você estuda? (m/v/n)')

if (turno.toLowerCase()==='m') {
    console.log('Bom Dia!')
} else if (turno.toLowerCase()==='v') {
    console.log('Boa Tarde!')
} else if (turno.toLowerCase()==='n') {
    console.log('Boa Noite!')
} else {
    console.log('Informe uma entrada válida: (m/v/n)')
} */

//6

/* let turno = prompt('Em qual turno você estuda? (m/v/n)')

switch (turno.toLowerCase()) {
    case 'm':
        console.log('Bom Dia!')
        break
    case 'v':
        console.log('Boa Tarde!')
        break
    case 'n':
        console.log('Boa Noite!')
        break
    default:
        console.log('Informe uma entrada válida: (m/v/n)')
        break
} */

//7

/* let generoMovie = prompt('Qual o gênero que vocês desejam assitir?')
let valorTiket = Number(prompt('Qual o valor do ingresso?'))

if (generoMovie.toLowerCase()==='fantasia' && valorTiket<15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
} */


// ====================== Desafios  ======================

//Desafio 1

/* let generoMovie = prompt('Qual o gênero que vocês desejam assitir?')
let valorTiket = Number(prompt('Qual o valor do ingresso?'))
let snackUser = prompt('Qual o snack que você quer comprar?')



if (generoMovie.toLowerCase()==='fantasia' && valorTiket<15) {
    console.log('Bom filme!')
    console.log('... com ', snackUser)
} else {
    console.log('Escolha outro filme :(')
} */

//Desafio 2

let nomeUser = prompt('Qual o seu nome?')
let tipoGame = prompt('Indique IN para jogo internacional e DO para jogo nacional:')
let nivelGame = prompt('Qual a etapa da partida? SF - semi-final; DT - terceiro-lugar; FI - final')
let categoria = prompt('Qual a categoria do seu ingresso, 1, 2, 3 ou 4?')
let qntdTicket = prompt('Quantos ingressos?')

console.log('--- Dados da Compra ---')
console.log('Nome do Cliente: ', nomeUser)

if (tipoGame.toLowerCase() === 'do')  {
    console.log('Tipo do jogo:  Nacional')
} else {
    console.log('Tipo do jogo:  Iternacional')
}

switch (nivelGame.toLowerCase()) {
    case 'sf':
        console.log('Etapa do jogo:  Semi-final')
        break
    case 'dt':
        console.log('Etapa do jogo:  Decisão de terceiro lugar')
        break
    case 'fi':
        console.log('Etapa do jogo:  Final')
        break
    default:
        console.log('Informe uma entrada válida: (SF/DT/FI)')
        break
}



