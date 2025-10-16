import React, { Component } from "react";

export default class Formulario extends Component {
  cajaNombre = React.createRef();

  // Variable de referencia
  peticionFormulario = (event) => {
    event.preventDefault();
    console.log("Peticion lista");

    let nombre = this.cajaNombre.current.value;
    console.log("Nombrer " + nombre);

    this.setState({
      nombre: nombre,
    });
  };

  state = {
    nombre: "",
  };

  render() {
    // Hacemos la peticiomn al formulario para querdnos con los valores
    // E n los input hay que meter ref {Que es la referencia al objeto react der cada input}
    return (
      <div>
        <h1>Formulario</h1>
        <form onSubmit={this.peticionFormulario}>
          <label>Nombre : </label>

          <input type="text" ref={this.cajaNombre} />
          <button>Realizar peticion</button>
        </form>
        <h1>Tu nombre es : {this.state.nombre}</h1>
      </div>
    );
  }
}
