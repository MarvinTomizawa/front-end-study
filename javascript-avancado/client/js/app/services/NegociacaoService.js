'use strict';

System.register(['./ConnectionFactory.js', '../dao/NegociacaoDao.js', '../models/Negociacao.js'], function (_export, _context) {
    "use strict";

    var ConnectionFactory, NegociacaoDao, Negociacao, _createClass, NegociacaoService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_ConnectionFactoryJs) {
            ConnectionFactory = _ConnectionFactoryJs.ConnectionFactory;
        }, function (_daoNegociacaoDaoJs) {
            NegociacaoDao = _daoNegociacaoDaoJs.NegociacaoDao;
        }, function (_modelsNegociacaoJs) {
            Negociacao = _modelsNegociacaoJs.Negociacao;
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

            _export('NegociacaoService', NegociacaoService = function () {
                function NegociacaoService() {
                    _classCallCheck(this, NegociacaoService);
                }

                _createClass(NegociacaoService, [{
                    key: 'obterNegociacoes',
                    value: function obterNegociacoes() {
                        return Promise.all([this.obtemNegociacoesDaSemana(), this.obtemNegociacoesDaSemanaPassada(), this.obtemNegociacoesDaSemanaRetrasada()]).then(function (negociacoes) {
                            return negociacoes.reduce(function (arrayAchatado, array) {
                                return arrayAchatado.concat(array);
                            });
                        });
                    }
                }, {
                    key: 'obtemNegociacoesDaSemana',
                    value: function obtemNegociacoesDaSemana() {
                        return this._obtemNegociacoes('negociacoes/semana');
                    }
                }, {
                    key: 'obtemNegociacoesDaSemanaPassada',
                    value: function obtemNegociacoesDaSemanaPassada() {
                        return this._obtemNegociacoes('negociacoes/anterior');
                    }
                }, {
                    key: 'obtemNegociacoesDaSemanaRetrasada',
                    value: function obtemNegociacoesDaSemanaRetrasada() {
                        return this._obtemNegociacoes('negociacoes/retrasada');
                    }
                }, {
                    key: '_handleErrors',
                    value: function _handleErrors(res) {
                        if (res.ok) {
                            return res;
                        }

                        throw new Error(res.statusText);
                    }
                }, {
                    key: '_obtemNegociacoes',
                    value: function _obtemNegociacoes(rota) {
                        var _this = this;

                        return fetch(rota).then(function (res) {
                            return _this._handleErrors(res);
                        }).then(function (res) {
                            return res.json();
                        }).then(function (negociacoes) {
                            return negociacoes.map(function (item) {
                                return new Negociacao(new Date(item.data), item.quantidade, item.valor);
                            });
                        });

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
                }, {
                    key: 'cadastrar',
                    value: function cadastrar(negociacao) {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.adiciona(negociacao);
                        }).catch(function (error) {
                            throw new Error(error);
                        });
                    }
                }, {
                    key: 'listaNegociacoesOffline',
                    value: function listaNegociacoesOffline() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.listaTodos();
                        }).catch(function (error) {
                            throw new Error(error);
                        });
                    }
                }, {
                    key: 'limpaTodos',
                    value: function limpaTodos() {
                        return ConnectionFactory.getConnection().then(function (connection) {
                            return new NegociacaoDao(connection);
                        }).then(function (dao) {
                            return dao.apagaTodos();
                        }).catch(function (error) {
                            throw new Error(error);
                        });
                    }
                }, {
                    key: 'importa',
                    value: function importa(negociacoesAtuais) {
                        return this.obterNegociacoes().then(function (negociacoes) {
                            return negociacoes.filter(function (negociacao) {
                                return !negociacoesAtuais.some(function (negociacaoExistente) {
                                    return JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente);
                                });
                            });
                        }).catch(function (error) {
                            throw new Error(error);
                        });
                    }
                }]);

                return NegociacaoService;
            }());

            _export('NegociacaoService', NegociacaoService);
        }
    };
});
//# sourceMappingURL=NegociacaoService.js.map