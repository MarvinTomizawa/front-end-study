export default class ClientView{
    
    constructor(element){
        this._element = element;
    }

    update(model){
        this._element.innerHTML = this._template(model);
    }

    _template(clientList){
        return `
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">CPF</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
            ${clientList.clients.map(client => this._clientTemplate(client)).join('')}
        </tbody>
      </table>
        `;
    }

    _clientTemplate(client){
        return `<tr>
            <td>${client.cpf}</td>
            <td>${client.name}</td>
            <td>${client.actions}</td>
        </tr>`;
    }
}