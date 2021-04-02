"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Funcionario, funcionarioProxy;

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

            funcionarioProxy = new Proxy(new Funcionario("MarvinTomizawa@hotmail.com"), {
                get: function get(target, prop, receiver) {
                    console.log("Armadilha aqui");
                    return Reflect.get(target, prop, receiver);
                }
            });


            console.log(funcionarioProxy.email);
        }
    };
});
//# sourceMappingURL=funcionarioExercicio.js.map