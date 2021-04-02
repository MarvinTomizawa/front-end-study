export default class ConnectionFactory{
    static getConnection(){
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open("petshop", 1);
    
            request.onupgradeneeded = event => {
                let db = event.target.result;
                db.createObjectStore("clients", { autoIncrements: true });
            }

            request.onsuccess = event => {
                resolve(event.target.result);
            }
                
            request.onerror = event => {
                console.log(event.target.result);
                reject("Houve uma falha para abrir conexão");
            }
        });
    }
}