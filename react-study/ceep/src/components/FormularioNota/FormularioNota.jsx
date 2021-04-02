import React, { Component } from "react";
import "./style.css";

class FormularioNota extends Component {
  constructor() {
    super();
    this.titulo = "";
    this.descricao = "";
    this.categoria = "Sem categoria";
    this.state = {
      categorias: [],
    };
    this._novasCategoriasref = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategoriasref);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategoriasref);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  render() {
    return (
      <form className="formulario-nota" onSubmit={this.criaCard.bind(this)}>
        <h2 className="formulario-nota__titulo">Nova Nota</h2>
        <input
          className="formulario-nota__nome"
          placeholder="Titulo"
          type="text"
          onChange={this.handleTitulo.bind(this)}
        ></input>
        <textarea
          className="formulario-nota__descricao"
          placeholder="Escreva sua nota.."
          cols="12"
          maxLength="200"
          onChange={this.handleDescricao.bind(this)}
        ></textarea>
        <select
          className="formulario-nota__categoria"
          onChange={this.handleCategoria.bind(this)}
          name="categorias"
        >
          <option value="Sem categoria">Sem categoria</option>
          {this.props.categorias.categorias.map((categoria, index) =>
            this.renderizaCategoria(categoria, index)
          )}
        </select>
        <button className="formulario-nota__criar">Criar nota</button>
      </form>
    );
  }

  handleTitulo(event) {
    this.titulo = event.target.value;
  }

  handleDescricao(event) {
    this.descricao = event.target.value;
  }

  handleCategoria(event) {
    this.categoria = event.target.value;
  }

  criaCard(event) {
    event.preventDefault();
    this.props.notas.adicionaNota(this.titulo, this.descricao, this.categoria);
  }

  renderizaCategoria(categoria, index) {
    console.log("Atualizando");
    return (
      <option value={categoria} key={index}>
        {categoria}
      </option>
    );
  }
}

export default FormularioNota;
