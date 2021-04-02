let funcionario = {email: 'abc@abc.com'};

let proxy = new Proxy(funcionario, {
    set(target, prop, value, receiver){
        console.log("Armadilha aqui");
        Reflect.set(target, prop, value, receiver);
    }
})

proxy.email = 20;