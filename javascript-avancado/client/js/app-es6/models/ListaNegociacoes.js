export class ListaNegociacoes{
    
    constructor(){
        this._listaNegociacoes=[];
    }

    adiciona(negociacao){
        this._listaNegociacoes.push(negociacao);
    }

    adicionaLote(negociacoes){
        this._listaNegociacoes.push(...negociacoes);
    }

    limpa(){
        this._listaNegociacoes = [];
    }

    get negociacoes(){
        return new Array(...this._listaNegociacoes);
    }

    get volumeTotal(){
        return this._listaNegociacoes.length == 0 ? 
        0 : 
        this._listaNegociacoes
            .map(item => item.volume)
            .reduce((item, initial) => initial + item)  
    }
}