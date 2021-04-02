export default class Client{
    constructor(name, cpf, actions){
        this._name = name;
        this._cpf = cpf;
        this._actions = actions;
    }

    get name(){
        return this._name;
    }

    get cpf(){
        return this._cpf;
    }

    get actions(){
        return this._actions;
    }
}