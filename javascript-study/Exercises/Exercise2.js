// array js
const cidades = new Array(
    "Paranavaí",
    "Curitiba",
    "Maringá",
    "Aracaju",
    "São paulo"
);

console.log(cidades);

const cidadeParaAdicionar = "Ogaki";
cidades.push(cidadeParaAdicionar);

console.log(cidades);

const quantidadeParaRemover = 1;
const indiceParaComecarARemover = 1;

cidades.splice(indiceParaComecarARemover, quantidadeParaRemover);
console.log(cidades);

console.log(cidades[2]);