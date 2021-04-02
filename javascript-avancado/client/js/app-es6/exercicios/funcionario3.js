class Funcionario {

    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}

let proxu = new Proxy(new Funcionario("abc@abc.com"),{
    set(target, prop, value, receiver){

        console.log(`Propriedade ${prop} alterada, Valor antigo: ${target[prop]}, novo valor: ${value}`)
        return Reflect.set(target, prop, value, receiver);
    }
});

proxu.email= "marvintomizawa@hotmail.com";