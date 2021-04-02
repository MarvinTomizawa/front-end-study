"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaNegociacoes;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
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

            _export("ListaNegociacoes", ListaNegociacoes = function () {
                function ListaNegociacoes() {
                    _classCallCheck(this, ListaNegociacoes);

                    this._listaNegociacoes = [];
                }

                _createClass(ListaNegociacoes, [{
                    key: "adiciona",
                    value: function adiciona(negociacao) {
                        this._listaNegociacoes.push(negociacao);
                    }
                }, {
                    key: "adicionaLote",
                    value: function adicionaLote(negociacoes) {
                        var _listaNegociacoes;

                        (_listaNegociacoes = this._listaNegociacoes).push.apply(_listaNegociacoes, _toConsumableArray(negociacoes));
                    }
                }, {
                    key: "limpa",
                    value: function limpa() {
                        this._listaNegociacoes = [];
                    }
                }, {
                    key: "negociacoes",
                    get: function get() {
                        return new (Function.prototype.bind.apply(Array, [null].concat(_toConsumableArray(this._listaNegociacoes))))();
                    }
                }, {
                    key: "volumeTotal",
                    get: function get() {
                        return this._listaNegociacoes.length == 0 ? 0 : this._listaNegociacoes.map(function (item) {
                            return item.volume;
                        }).reduce(function (item, initial) {
                            return initial + item;
                        });
                    }
                }]);

                return ListaNegociacoes;
            }());

            _export("ListaNegociacoes", ListaNegociacoes);
        }
    };
});
//# sourceMappingURL=ListaNegociacoes.js.map