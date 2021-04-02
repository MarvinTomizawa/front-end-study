import Client from './Client.js';

export default class ClientList{
    constructor(){
        this._clientList = [];
        this._init();
    }

    _init(){
        this._clientList.push(new Client("Jairo","66809433023",""))
        this._clientList.push(new Client("Elena","18875539081",""))
    }

    get clients(){
        return [].concat(this._clientList);
    }

    add(client){
        this._clientList.push(client);
    }
}