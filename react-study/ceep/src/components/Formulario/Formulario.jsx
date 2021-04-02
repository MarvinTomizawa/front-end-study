import React, { Component } from "react";
import FormularioCategoria from "../FormularioCategoria/FormularioCategoria";
import FormularioNota from "../FormularioNota/FormularioNota";
import "./style.css";

class Formulario extends Component {
  render() {
    return (
      <aside className="formulario">
        <FormularioNota
          categorias={this.props.categorias}
          notas={this.props.notas}
        ></FormularioNota>
        <FormularioCategoria
          categorias={this.props.categorias}
          notas={this.props.notas}
        ></FormularioCategoria>
      </aside>
    );
  }
}

export default Formulario;
