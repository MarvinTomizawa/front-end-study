import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSvg } from "../../assets/delete.svg";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota__header">
          <h3 className="card-nota__categoria">{this.props.categoria}</h3>
          <DeleteSvg
            className="card-nota__delete"
            onClick={() => this.props.deletarNota(this.props.index)}
          ></DeleteSvg>
        </header>
        <section className="card-nota__conteudo">
          <h2 className="card-nota__titulo">{this.props.titulo}</h2>
          <p className="card-nota__descricao">{this.props.descricao}</p>
        </section>
      </section>
    );
  }
}

export default CardNota;
