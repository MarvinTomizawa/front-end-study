export default class ProxyFactory{
    static create(model, view, methods){
        return new Proxy(model, {
            get(target, prop){
                if(methods.includes(prop) && ProxyFactory._isFunction(prop)){
                    return () => {
                        Reflect.apply(target, prop, arguments);
                        view.update(model);
                    }
                }

                return target[prop];
            }
        });
    }

    static _isFunction(property){
        return typeof(property) == typeof(Function);
    }
}