import Observable from "./Observable";

export default class Categorias extends Observable{
    constructor(){
        super();
        this.categorias = [];
        this.inscritos = [];
    }

    adicionaCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this._notificar(this.categorias);
    }
}