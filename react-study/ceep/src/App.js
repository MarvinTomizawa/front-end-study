import React, { Component } from "react";
import Formulario from "./components/Formulario/Formulario"
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";

class App extends Component {
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }
  
  render() {
    return (
      <div className="body">
        <Formulario 
          categorias={this.categorias}
          notas={this.notas}>
        </Formulario>
        <ListaDeNotas 
          categorias={this.categorias}
          notas={this.notas}>
        </ListaDeNotas>
      </div>
    );
  }
}

export default App;
