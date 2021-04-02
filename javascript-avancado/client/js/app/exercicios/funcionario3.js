"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Funcionario, proxu;

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

            Funcionario = function () {
                function Funcionario(email) {
                    _classCallCheck(this, Funcionario);

                    this._email = email;
                }

                _createClass(Funcionario, [{
                    key: "email",
                    get: function get() {
                        return this._email;
                    },
                    set: function set(email) {
                        this._email = email;
                    }
                }]);

                return Funcionario;
            }();

            proxu = new Proxy(new Funcionario("abc@abc.com"), {
                set: function set(target, prop, value, receiver) {

                    console.log("Propriedade " + prop + " alterada, Valor antigo: " + target[prop] + ", novo valor: " + value);
                    return Reflect.set(target, prop, value, receiver);
                }
            });


            proxu.email = "marvintomizawa@hotmail.com";
        }
    };
});
//# sourceMappingURL=funcionario3.js.map