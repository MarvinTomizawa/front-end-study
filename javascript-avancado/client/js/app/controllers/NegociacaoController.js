'use strict';

System.register(['../models/ListaNegociacoes.js', '../models/Mensagem.js', '../models/Negociacao.js', '../services/NegociacaoService.js', '../helpers/DateHelper.js', '../helpers/Bind.js', '../views/MensagemView.js', '../views/NegociacoesView.js'], function (_export, _context) {
    "use strict";

    var ListaNegociacoes, Mensagem, Negociacao, NegociacaoService, DateHelper, Bind, MensagemView, NegociacoesView, _createClass, NegociacaoController;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsListaNegociacoesJs) {
            ListaNegociacoes = _modelsListaNegociacoesJs.ListaNegociacoes;
        }, function (_modelsMensagemJs) {
            Mensagem = _modelsMensagemJs.Mensagem;
        }, function (_modelsNegociacaoJs) {
            Negociacao = _modelsNegociacaoJs.Negociacao;
        }, function (_servicesNegociacaoServiceJs) {
            NegociacaoService = _servicesNegociacaoServiceJs.NegociacaoService;
        }, function (_helpersDateHelperJs) {
            DateHelper = _helpersDateHelperJs.DateHelper;
        }, function (_helpersBindJs) {
            Bind = _helpersBindJs.Bind;
        }, function (_viewsMensagemViewJs) {
            MensagemView = _viewsMensagemViewJs.MensagemView;
        }, function (_viewsNegociacoesViewJs) {
            NegociacoesView = _viewsNegociacoesViewJs.NegociacoesView;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('NegociacaoController', NegociacaoController = function () {
                function NegociacaoController() {
                    _classCallCheck(this, NegociacaoController);

                    var $ = document.querySelector.bind(document);
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacaoService = new NegociacaoService();

                    this._listaNegociacao = new Bind(new ListaNegociacoes(), new NegociacoesView($("#negociacao-view")), "adiciona", "adicionaLote", "limpa");

                    this._mensagem = new Bind(new Mensagem(), new MensagemView($("#mensagem-view")), "texto");

                    this._init();
                }

                _createClass(NegociacaoController, [{
                    key: 'adiciona',
                    value: function adiciona(event) {
                        var _this = this;

                        event.preventDefault();

                        var negociacao = this._criaNegociacao();

                        this._negociacaoService.cadastrar(negociacao).then(function (mensagem) {
                            _this._listaNegociacao.adiciona(negociacao);
                            _this._limpaFormulario();
                            _this._mensagem.texto = mensagem;
                        }).catch(function (error) {
                            return _this._mensagem.texto = error;
                        });
                    }
                }, {
                    key: 'limpa',
                    value: function limpa(event) {
                        var _this2 = this;

                        event.preventDefault();

                        this._negociacaoService.limpaTodos().then(function (mensagem) {
                            _this2._listaNegociacao.limpa();
                            _this2._mensagem.texto = mensagem;
                        }).catch(function (error) {
                            return _this2._mensagem.texto = error;
                        });
                    }
                }, {
                    key: 'importaNegociacoes',
                    value: function importaNegociacoes() {
                        var _this3 = this;

                        this._negociacaoService.importa(this._listaNegociacao.negociacoes).then(function (negociacoes) {
                            negociacoes.forEach(function (negociacao) {
                                return _this3._listaNegociacao.adiciona(negociacao);
                            });
                            if (negociacoes.length > 0) {
                                _this3._mensagem.texto = "Negociacoes obtidas com sucesso";
                            }
                        }).catch(function (error) {
                            return _this3._mensagem.texto = error;
                        });
                    }
                }, {
                    key: '_criaNegociacao',
                    value: function _criaNegociacao() {
                        var negociacaoDate = DateHelper.textoParaData(this._inputData.value);

                        return new Negociacao(negociacaoDate, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    }
                }, {
                    key: '_limpaFormulario',
                    value: function _limpaFormulario() {
                        this._inputData.value = "";
                        this._inputQuantidade.value = 1;
                        this._inputValor.value = 0.0;

                        this._inputData.focus();
                    }
                }, {
                    key: '_init',
                    value: function _init() {
                        var _this4 = this;

                        this._negociacaoService.listaNegociacoesOffline().then(function (negociacoes) {
                            return _this4._listaNegociacao.adicionaLote(negociacoes);
                        }).catch(function (error) {
                            return _this4._mensagem.texto = error;
                        });

                        setInterval(function () {
                            _this4.importaNegociacoes();
                        }, 3000);
                    }
                }]);

                return NegociacaoController;
            }());

            _export('NegociacaoController', NegociacaoController);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map