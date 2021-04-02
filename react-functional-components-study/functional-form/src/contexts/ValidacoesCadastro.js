import React from 'react';

let ValidacoesCadastro = React.createContext({
    cpf: semValidacao,
    senha: semValidacao
});

function semValidacao() {
    return {
        valido: true,
        texto: ""
    }
}

export default ValidacoesCadastro;