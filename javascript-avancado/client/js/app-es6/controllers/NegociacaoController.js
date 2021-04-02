import { ListaNegociacoes } from '../models/ListaNegociacoes.js'
import { Mensagem } from '../models/Mensagem.js'
import { Negociacao } from '../models/Negociacao.js'
import { NegociacaoService } from '../services/NegociacaoService.js'
import { DateHelper } from '../helpers/DateHelper.js'
import { Bind } from '../helpers/Bind.js'
import { MensagemView } from '../views/MensagemView.js'
import { NegociacoesView } from '../views/NegociacoesView.js'

class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacaoService = new NegociacaoService();

        this._listaNegociacao = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($("#negociacao-view")),
            "adiciona",
            "adicionaLote",
            "limpa");

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagem-view")),
            "texto");

        this._init();
    }

    adiciona(event) {
        event.preventDefault();
        
        let negociacao = this._criaNegociacao();

        this._negociacaoService
            .cadastrar(negociacao)
            .then(mensagem => {
                this._listaNegociacao.adiciona(negociacao);                
                this._limpaFormulario();
                this._mensagem.texto = mensagem;
            })
            .catch(error => this._mensagem.texto = error);
    }

    limpa(event) {
        event.preventDefault();

        this._negociacaoService
            .limpaTodos()
            .then(mensagem => {
                this._listaNegociacao.limpa();
                this._mensagem.texto = mensagem;
            })
            .catch(error => this._mensagem.texto = error);
    }

    importaNegociacoes() {
        this._negociacaoService
            .importa(this._listaNegociacao.negociacoes)
            .then(negociacoes =>{
                negociacoes.forEach(negociacao => this._listaNegociacao.adiciona(negociacao));
                if(negociacoes.length > 0){
                    this._mensagem.texto = "Negociacoes obtidas com sucesso";
                }
            })
            .catch(error => this._mensagem.texto = error);
    }

    _criaNegociacao() {
        let negociacaoDate = DateHelper.textoParaData(this._inputData.value);

        return new Negociacao(
            negociacaoDate,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    _init(){
        this._negociacaoService
            .listaNegociacoesOffline()
            .then(negociacoes => this._listaNegociacao.adicionaLote(negociacoes))
            .catch(error => this._mensagem.texto = error);
        
        setInterval(() => {
            this.importaNegociacoes();
        }, 3000)
    }
}

let negociacaoController = new NegociacaoController();

export function currentInstance(){
    return negociacaoController;
}