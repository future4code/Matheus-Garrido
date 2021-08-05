//a. Para acessar os parâmetros repassados pelo terminal
//utilizamos o process.argv.

//b. 
/* const nameUser = process.argv[2]
const ageUser = process.argv[3]

console.log(`Olá, ${nameUser}! Você tem ${ageUser} anos.`) */

//c.
const nameUser = process.argv[2]
const ageUser = Number(process.argv[3])

console.log(`Olá, ${nameUser}! Você tem ${ageUser} anos. Em sete anos você terá ${ageUser + 7}`)