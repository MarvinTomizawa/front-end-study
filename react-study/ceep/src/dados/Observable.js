export default class Observable {
    constructor() {
        this._inscritos = [];
    }

    _notificar(dados) {
        this._inscritos.forEach(func => func(dados));
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }
}