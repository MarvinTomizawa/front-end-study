export class Negociacao {
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()) || new Date();
        this._quantidade = quantidade || 1;
        this._valor = valor || 0.0;
        Object.freeze(this);
    }

    get quantidade(){
        return this._quantidade;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return new Date(this._data.getTime());
    }

    get valor(){
        return this._valor;
    }
}