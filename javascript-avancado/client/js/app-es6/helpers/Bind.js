import {ProxyFactory} from '../services/ProxyFactory.js'

export class Bind{

    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(model, props, 
            modelObject => view.update(modelObject));    
        
        view.update(model);

        return proxy;
    }
}