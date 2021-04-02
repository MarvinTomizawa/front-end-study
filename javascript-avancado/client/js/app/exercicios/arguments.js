"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Teste, teste, array;

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

            Teste = function () {
                function Teste() {
                    _classCallCheck(this, Teste);
                }

                _createClass(Teste, [{
                    key: "teste",
                    value: function teste() {}
                }]);

                return Teste;
            }();

            teste = new Teste();
            array = [1, 2, 3, 4, 5];


            teste.teste.apply(teste, array);
        }
    };
});
//# sourceMappingURL=arguments.js.map