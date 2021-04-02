export class ProxyFactory{
    static create(model, props, callback){
        return new Proxy(model, {
            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function(){
                        Reflect.apply(target[prop], target, arguments);
                        callback(target);
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            set(target, prop, value, receiver){
                if(props.includes(prop)){
                    Reflect.set(target, prop, value, receiver);
                    callback(target);
                    return true;
                }

                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _isFunction(property){
        return typeof(property) === typeof(Function);
    }
}