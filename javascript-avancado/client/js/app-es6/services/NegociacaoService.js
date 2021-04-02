import {ConnectionFactory} from './ConnectionFactory.js';
import {NegociacaoDao} from '../dao/NegociacaoDao.js';
import {Negociacao} from '../models/Negociacao.js';

export class NegociacaoService {

    obterNegociacoes(){
        return Promise.all(
            [this.obtemNegociacoesDaSemana(),
            this.obtemNegociacoesDaSemanaPassada(),
            this.obtemNegociacoesDaSemanaRetrasada()])
            .then(negociacoes => negociacoes.reduce((arrayAchatado, array) => arrayAchatado.concat(array)));
    }

    obtemNegociacoesDaSemana(){
        return this._obtemNegociacoes('negociacoes/semana');
    }

    obtemNegociacoesDaSemanaPassada(){
        return this._obtemNegociacoes('negociacoes/anterior');
    }
    
    obtemNegociacoesDaSemanaRetrasada(){
        return this._obtemNegociacoes('negociacoes/retrasada');
    }

    _handleErrors(res){
        if(res.ok){
            return res;
        }

        throw new Error(res.statusText);
    }

    _obtemNegociacoes(rota) {
        return fetch(rota)
            .then(res => this._handleErrors(res))
            .then(res => res.json())
            .then(negociacoes => 
                negociacoes.map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));

        // return new Promise((resolve, reject) => {
        //     let xhr = new XMLHttpRequest();

        // xhr.open('GET', rota);

        // xhr.onreadystatechange = () => {

        //     if (xhr.readyState == 4) {
        //         if (xhr.status == 200) {
        //             let negociacoes = JSON.parse(xhr.responseText)
        //                 .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor));

        //             resolve(negociacoes);
        //         } else {
        //             console.log(`Ready state ${xhr.readyState} Status: ${xhr.status} Mensagem de erro: ${xhr.responseText}`);
        //             reject("Não foi possível buscar as negociações");
        //         }
        //     }
        // };

        // xhr.send();
        // })
    }

    cadastrar(negociacao){
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .catch(error => {
                throw new Error(error)
            });
    }

    listaNegociacoesOffline(){
        return ConnectionFactory
        .getConnection()
        .then(connection => new NegociacaoDao(connection))
        .then(dao => dao.listaTodos())
        .catch(error => {throw new Error(error)})
    }

    limpaTodos(){
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .catch(error => {throw new Error(error)})
    }

    importa(negociacoesAtuais){
        return this.obterNegociacoes()
            .then(negociacoes =>
                negociacoes.filter(negociacao =>
                    !negociacoesAtuais.some(negociacaoExistente =>
                        JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente)))
            ).catch(error => {throw new Error(error)});
    }
}