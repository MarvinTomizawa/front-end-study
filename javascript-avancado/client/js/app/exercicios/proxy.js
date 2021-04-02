"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var funcionarioProxy;
    return {
        setters: [],
        execute: function () {
            funcionarioProxy = new Proxy({ email: 'abc@abc.com' }, {
                get: function get(target, prop, receiver) {
                    console.log("Armadilha aqui");
                    return "**" + target[prop] + "**";
                }
            });


            console.log(funcionarioProxy.email);
        }
    };
});
//# sourceMappingURL=proxy.js.map