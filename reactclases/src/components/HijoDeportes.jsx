import React, { Component } from "react";

export default class HijoDeportes extends Component {
  seleccionarFavorito = () => {
    let deporte = this.props.nombre;
    this.props.mostrarFavorito(deporte);
  };
  render() {
    return (
      <div>
        <h3 style={{ color: "green" }}>Deporte: {this.props.nombre}</h3>
        <button onClick={this.seleccionarFavorito} type="button">
          Seleccionar Favorito
        </button>
      </div>
    );
  }
}
