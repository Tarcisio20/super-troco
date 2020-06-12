const funcs =  require('./super-troco.js')

const valorCompra = 8.62
const notaCliente = 8.70
//const notaCliente = 50.00
//const notaCliente = 8.70

const troco = funcs.FuncTroco(valorCompra, notaCliente)
console.log("Valor do troco "+troco)

//if(funcs.superTroco(troco)){
    const tr = funcs.gerarSuperTroco(troco)
    console.log(">>> Valor do Troco "+tr[0])
    console.log(">>> Valor do Super Troco "+tr[1])
//}else{
  //  console.log(">> Valores não correspondem a super troco válido!")
//}
