"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var funcionario, proxy;
    return {
        setters: [],
        execute: function () {
            funcionario = { email: 'abc@abc.com' };
            proxy = new Proxy(funcionario, {
                set: function set(target, prop, value, receiver) {
                    console.log("Armadilha aqui");
                    Reflect.set(target, prop, value, receiver);
                }
            });


            proxy.email = 20;
        }
    };
});
//# sourceMappingURL=funcionario2.js.map