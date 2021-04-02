import { View } from './View.js';

export class NegociacoesView extends View{

    constructor(element){
        super(element);
    }

    _template(listaNegociacoes){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${listaNegociacoes.negociacoes.map(item => this._negociacaoToHtml(item)).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${listaNegociacoes.volumeTotal}</td>
            </tfoot>
        </table>
        `;
    }

    _negociacaoToHtml(negociacao){
        return `
            <tr>
                <td>${negociacao.data}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                <td>${negociacao.volume}</td>           
            </tr>
        `;
    }
}