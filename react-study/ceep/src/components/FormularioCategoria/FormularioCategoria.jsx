import React, { Component } from "react";
import ListaCategorias from "../ListaCategorias/ListaCategorias";
import "./style.css";

class FormularioCategoria extends Component {
  constructor() {
    super();
    this._categoria = "";
  }

  render() {
    return (
      <section className="formulario-categoria">
        <h2 className="formulario-categoria__titulo">Categoria</h2>
        <form
          className="formulario-categoria__inputs"
          onSubmit={this._adicionaCategoria.bind(this)}
        >
          <div className="categoria-input">
            <input
              placeholder="Adicionar categoria.."
              type="text"
              name="categoria"
              className="categoria-input__input"
              onChange={this._handleCategoria.bind(this)}
            />
            <input
              type="submit"
              value="Adicionar"
              className="categoria-input__button"
            />
          </div>
        </form>

        <ListaCategorias categorias={this.props.categorias}></ListaCategorias>
      </section>
    );
  }

  _handleCategoria(event) {
    this._categoria = event.target.value;
  }

  _adicionaCategoria(event){
    event.preventDefault();
    this.props.categorias.adicionaCategoria(this._categoria);
  }
}

export default FormularioCategoria;
