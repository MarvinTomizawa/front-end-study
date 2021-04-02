import {
    useState
} from 'react';

function useErros(validacoes) {
    const [erros, setErros] = useState(criarEstadoInicial(validacoes));

    function possoEnviar() {
        console.log(erros)
        for (let campo in erros) {
            if (!erros[campo].valido) {

                return false;
            }
        }

        return true;
    }

    function validarCampos(event) {
        const {
            name,
            value
        } = event.target;
        const novoEstado = {
            ...erros
        };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }
    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {}
    for (let campo in validacoes) {
        estadoInicial[campo] = {
            valido: true,
            texto: ""
        }
    }

    return estadoInicial;
}

export default useErros;