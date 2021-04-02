import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente = new Cliente("Marvin", 12321025980);

const conta = new ContaCorrente("1", cliente);

conta.depositar(200);

console.log(conta);
const valorSacado = conta.sacar(100);

console.log(conta);
console.log(`Valor sacado ${valorSacado}`);

console.log(`Numero de contas: ${ContaCorrente.numeroDeContas}`);

const conta2 = new ContaCorrente("2", cliente);

console.log(`Numero de contas: ${ContaCorrente.numeroDeContas}`);