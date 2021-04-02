let funcionarioProxy = new Proxy({email: 'abc@abc.com'},{
    get(target, prop, receiver){
        console.log("Armadilha aqui");
        return `**${target[prop]}**`;
    }
});

console.log(funcionarioProxy.email);