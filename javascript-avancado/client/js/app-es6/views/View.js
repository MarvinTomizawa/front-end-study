export class View{
    constructor(element){
        this._element = element;
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }

    _template(model){
        throw Error("Função não implementada");
    }
}