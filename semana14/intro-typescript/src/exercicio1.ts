//a.
/* const minhaString: string = "Oi, mundo!"

//const minhaString: string = 2
// Quando atribuímos o tipo string a uma variável, ela não aceita um número, pois number é outro tipo. 

console.log(minhaString) */

//b.
/* //Aceita somente numeros
//const meuNumero: number = 2
//Aceita numeros e string
const meuNumero: number | string = "2"
console.log(meuNumero) */

//c.
/* type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
} 

const matheus: pessoa = {
    nome: "Matheus",
    idade: 28,
    corFavorita: "cinza"
}
const jonatas: pessoa = {
    nome: "Jonatas",
    idade: 31,
    corFavorita: "preto"
}
const eliana: pessoa = {
    nome: "Eliana",
    idade: 51,
    corFavorita: "branco"
}

console.log(matheus, jonatas, eliana) */

//d.

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo", 
    VERDE = "Verde", 
    AZUL = "Azul", 
    ANIL = "Anil", 
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
} 

const matheus: pessoa = {
    nome: "Matheus",
    idade: 28,
    corFavorita: CoresArcoIris.VERMELHO
}

console.log(matheus)