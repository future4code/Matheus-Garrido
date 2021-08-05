const operator = process.argv[2].toLowerCase()
const factor1 = Number(process.argv[3])
const factor2 = Number(process.argv[4])

switch (operator) {
    case "add":
        console.log(factor1 + factor2)
        break;
    case "sub":
        console.log(factor1 - factor2)
        break;
    case "mult":
        console.log(factor1 * factor2)
        break;
    case "div":
        console.log(factor1 / factor2)
        break;
    default:
        console.log("Informe um operador (ex.: add, sub, mult ou div) e dois números")
        break;
}
