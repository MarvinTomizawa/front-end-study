import ProxyFactory from '../service/ProxyFactory.js';

export default  class Bind{
    constructor(model, view, ...methods){
        let proxy = ProxyFactory.create(model, view, methods);

        view.update(model);

        return proxy;
    }
}