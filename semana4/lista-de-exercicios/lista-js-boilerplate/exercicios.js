//Exercício 1

function inverteArray(array) {
  const maiorIndice = (array.length)-1
  let arrayInverida = []
  for (let i = 0; i < array.length; i++) {
     let elemento = array[(maiorIndice-i)]
     arrayInverida[i] = elemento
  }
  return arrayInverida
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let quadradoNumerosPares = []
   let contadorNumPar = 0
   for (const i of array) {
      if (array[i] % 2 === 0) {
         quadradoNumerosPares[contadorNumPar] = Math.pow(array[i], 2)
         contadorNumPar++
      }  
   }
   return quadradoNumerosPares
}

//Exercício 3

function retornaNumerosPares (array) {
   let numerosPares = array.filter((num) => {
      if (num %2 === 0) {
         return true
      }
   })
   return numerosPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = 0
   for (const i of array) {

      if (i > maiorNumero) {
         maiorNumero = i
      }     
   }  
  return maiorNumero 
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 

   const respostas = [booleano1 && booleano2 && !booleano4, (booleano1 && booleano2) || !booleano3, (booleano2 || booleano3) && (booleano4 || booleano1), !(booleano2 && booleano3) || !(booleano1 && booleano3), !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)]

   return respostas
}

//Exercício 7

function retornaNNumerosPares(n) {
   ultimoNumPar = (n*2)-2
   let numPares = [ultimoNumPar]

   for (let i = 1; i < n; i++) {
      ultimoNumPar += - 2;
      numPares.push(ultimoNumPar)
   }

   return numPares.reverse()
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if (a === b && b === c && c === a) {
     return 'Equilátero'
  } else if (a !== b && b !== c && c !== a) {
     return 'Escaleno'
  } else {
     return 'Isósceles'
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   
   const maiorNum = Math.max(num1, num2)
   const menorNum = Math.min(num1, num2)
   const subtracao = maiorNum - menorNum

   let divisibilidade
   if (maiorNum % menorNum === 0) {
      divisibilidade = true
   } else {
      divisibilidade = false
   }

   const propNumeros = {
      maiorNumero: maiorNum,
      maiorDivisivelporMenor: divisibilidade,
      diferenca: subtracao
   }

   return propNumeros
}

// Exercício 10

function segundoMaiorEMenor(array) {
   const maiorValor = Math.max(...array)
   const menorValor = Math.min(...array)
   array.splice(array.indexOf(maiorValor), 1);
   array.splice(array.indexOf(menorValor), 1);
   const segMaiorValor = Math.max(...array)
   const segMenorValor = Math.min(...array)
   return [segMaiorValor, segMenorValor]
}

//Exercício 11

function ordenaArray(array) {
   let n = 0
   let arrOrdemCrescente = []
   while (n < array.length) {

      let maiorNumero = Math.min(...array)
      for (const i of array) {
         if (i > maiorNumero) {
            maiorNumero = i
         } 
      }
      n++
      arrOrdemCrescente [array.length - n] =  maiorNumero
      array.splice(array.indexOf(maiorNumero), 1);
      array.push(Math.min(...array))
   }
   return arrOrdemCrescente
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
   const filmeFavAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return filmeFavAstrodev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
   const filmeFavAstrodev = {
      nome: 'O Diabo Veste Prada',
      ano: 2006,
      diretor: 'David Frankel',
      atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
   }
   return `Venha assistir ao filme ${filmeFavAstrodev.nome}, de ${filmeFavAstrodev.ano}, dirigido por ${filmeFavAstrodev.diretor} e estrelado por ${filmeFavAstrodev.atores[0]}, ${filmeFavAstrodev.atores[1]}, ${filmeFavAstrodev.atores[2]}, ${filmeFavAstrodev.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
   const propriedadesRetangulo = {
      largura: lado1,
      altura: lado2,
      perimetro: 2 * (lado1 + lado2),
      area: lado1 * lado2
   }
   return propriedadesRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   pessoa.nome = "ANÔNIMO"
   return pessoa
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const pessoasAdultas = arrayDePessoas.filter((adultos) => {
      return adultos.idade >= 20
   })
   return pessoasAdultas
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
   const pessoasMenores = arrayDePessoas.filter((menores) => {
      return menores.idade < 20
   })
   return pessoasMenores
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   for (let i = 0; i < array.length; i++) {
      array[i] *= 2
   }
   return array
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  let arrayString =[]
  for (let i = 0; i < array.length; i++) {
   array[i] *= 2
   arrayString[i]=`${array[i]}`
}
return arrayString
}

// Exercício 17, letra C

function verificaParidade(array) {
   let arrayMensgParidade = []
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
         arrayMensgParidade[i] = `${array[i]} é par`
      } else {
         arrayMensgParidade[i] = `${array[i]} é ímpar`
      }
   }
   return arrayMensgParidade
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   const pessoasAutorizadas = pessoas.filter((autorizados) => {
      return autorizados.altura >= 1.5 && autorizados.idade > 14 && autorizados.idade < 60
   })
   return pessoasAutorizadas
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
   const pessoasNaoAutorizadas = pessoas.filter((naoAutorizado) => {
      //console.log(naoAutorizado)
      return naoAutorizado.altura < 1.5 || naoAutorizado.idade <= 14 || naoAutorizado.idade > 60
   })
   return pessoasNaoAutorizadas
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}