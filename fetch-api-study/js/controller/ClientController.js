import ClientList from '../model/ClientList.js';
import ClientView from '../view/ClientView.js'
import Bind from '../helpers/Bind.js';

export default class ClientController{
    constructor(){
        let $ = document.querySelector.bind(document);
        this._clientList = new Bind(
            new ClientList(),
            new ClientView($("#client-table")),
            "add"
        );
        
    }
}