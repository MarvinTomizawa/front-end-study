import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    _agencia;
    _saldo = 0; // Proposta para campos privados no javascript utilizando o # na frente.
    // Para proposta também existe o #
    _cliente;

    constructor(agencia, cliente){
        ContaCorrente.numeroDeContas++;
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
    }

    get cliente(){
        return this._cliente;
    }

    set cliente(dadosCliente){
        if(dadosCliente instanceof Cliente){
            this._cliente = dadosCliente;
        }
    }

    get saldo(){
        return this.saldo;
    }

    depositar(valor) {
        if(valor <= 0){
            console.log(`Valor ${valor} inválido.`);
            return;
        }

        console.log(`Valor depositado ${valor}.`);
        this._saldo += valor;
    }

    sacar(valor) {
        if(valor <= 0){
            console.log(`Valor ${valor} inválido.`);
            return;
        }

        if(valor > this._saldo){
            console.log(`Valor ${valor} maior que o saldo da conta.`);
            return;
        }

        console.log(`Valor sacado ${valor}.`);
        this._saldo -= valor;
        return valor;
    }
}