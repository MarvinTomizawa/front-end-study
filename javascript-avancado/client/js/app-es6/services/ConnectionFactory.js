const stores = ['negociacoes'];
const version = 1;
const dbName = 'aluraframe';
var connection;
var close;

export class ConnectionFactory {

    constructor(){
        throw new Error("Não é possível instanciar esta classe");
    }

    static getConnection(){

        return new Promise((resolve, reject) =>{
            let openRequest = window.indexedDB.open(dbName, version);
            
            openRequest.onupgradeneeded = event =>{
                let conection = event.target.result;
                ConnectionFactory._createStores(conection);
            }

            openRequest.onsuccess = event =>{
                if(!connection){
                    connection = event.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function(){
                        throw new Error("A conection deve ser fechada pela conection factory");
                    }
                }
                resolve(connection);
            }

            openRequest.onerror = event =>{
                reject(event.target.error);
            }
        });
    }

    static _createStores(conection) {
        stores.forEach(store => {
            if (conection.objectStoreNames.contains(store)) {
                conection.deleteObjectStore(store);
            }

            conection.createObjectStore(store, { autoIncrement: true });
        });
    }

    static closeConnection(){
        if(connection){
            close();
            connection = null;
        }
    }
}