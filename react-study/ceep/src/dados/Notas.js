import Observable from "./Observable";

export default class Notas extends Observable{
    constructor() {
        super();
        this.notas = [];
    }

    adicionaNota(titulo, categoria, descricao) {
        const novaNota = new Nota(titulo, categoria, descricao);
        this.notas.push(novaNota);
        this._notificar(this.notas);
    }

    apagarNota(index){
        this.notas.splice(index, 1);
        this._notificar(this.notas);
    }
}

class Nota {
    constructor(titulo, descricao, categoria) {
        this.descricao = descricao;
        this.titulo = titulo;
        this.categoria = categoria;
    }
}