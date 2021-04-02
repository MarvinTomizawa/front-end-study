import {currentInstance} from './controllers/NegociacaoController.js';

let negociacaoController = currentInstance();

document.querySelector(".form").onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector("#apagar").onclick = negociacaoController.limpa.bind(negociacaoController);