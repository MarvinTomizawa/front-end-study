export default  class ClientDao{
    constructor(connection){
        this._connection = connection;
        this._store = "clients";
    }

    add(client){
        return new Promise((resolve, reject) =>{
            let request = this._objectStore.add(client);

            request.onerror = event => {
                console.log(event.target.result);
                reject("Houve um erro ao adicionar clientes");
            }

            request.onsuccess = () => {
                resolve();
            }
        });
    }

    listClients(){
        return new Promise((resolvem, reject) => {

            let cursor = this._objectStore.openCursor();
    
            let clients = [];
    
            cursor.onsuccess = event =>{
                let cursorValue = event.target.result;
    
                if(cursorValue){
                    clients.push(cursorValue);
                    cursorValue.continue();
                }
            }
    
            cursor.onerror = event => {
                console.log(event.target.result);
                reject("Houve um erro ao buscar os clientes");
            }

            resolve(clients);
        });
    }

    get _objectStore(){
        return this._connection
        .transaction(this._store, "readwrite")
        .objectStore(this._store);
    }
}