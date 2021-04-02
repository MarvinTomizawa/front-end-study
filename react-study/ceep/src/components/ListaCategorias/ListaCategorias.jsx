import React, { Component } from "react";
import "./style.css";

class ListaCategorias extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };

    this.novasCategorias = (categorias) =>
      this.setState({ ...this.state, categorias });
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.novasCategorias);
  }

  render() {
    return (
      <ul className="lista-categorias">
        {this.state.categorias.map((categoria, index) =>
          this.criaCategoria(categoria, index)
        )}
      </ul>
    );
  }

  criaCategoria(categoria, index) {
    return (
      <li className="lista-categorias__categoria" key={index}>
        {categoria}
      </li>
    );
  }
}

export default ListaCategorias;
