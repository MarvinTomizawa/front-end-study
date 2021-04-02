import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };

    this.novasNotas = (notas) => this.setState({ ...this.state, notas });
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas);
  }

  render() {
    return (
      <main>
        <ul className="lista-notas">{this._itensHtml()}</ul>
      </main>
    );
  }

  _itensHtml() {
    return this.state.notas.map((item, index) => (
      <li key={index} className="nota">
        <CardNota
          deletarNota={this.props.notas.apagarNota.bind(this.props.notas)}
          index={index}
          titulo={item.titulo}
          categoria={item.categoria}
          descricao={item.descricao}
        ></CardNota>
      </li>
    ));
  }
}

export default ListaDeNotas;
