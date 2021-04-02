import {Negociacao} from '../models/Negociacao.js';

export class NegociacaoDao {
    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    listaTodos() {
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            let negociacoes = [];

            cursor.onsuccess = event => {
                let atual = event.target.result;

                if (atual) {
                    var dado = atual.value;

                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));

                    atual.continue();
                } else {
                    resolve(negociacoes);
                }
            }

            cursor.onerror = event => {
                console.log(event.target.error);
                reject("Não foi possível buscar as negociações");
            }
        });
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = () => {
                resolve("Adicionado com sucesso");
            }

            request.onerror = event => {
                console.log(event.target.error);
                reject("Não foi possivel adicionar a negociacao");
            }
        });
    }

    apagaTodos() {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear()

            request.onsuccess = () => {
                resolve("Negociações apagadas com sucesso");
            }

            request.onerror = event => {
                console.log(event.target.error);
                reject("Não foi possivel apagar as negociacões");
            }
        });
    }
}