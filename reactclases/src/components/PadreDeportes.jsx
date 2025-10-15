import React, { Component } from "react";
import HijoDeportes from "./HijoDeportes";

export default class PadreDeportes extends Component {
  deportes = ["Football", "Tenis", "Padel", "Petanca"];
  state = {
    favorito: "",
  };
  mostrarFavorito = (deporteSeleccionado) => {
    this.setState({
      favorito: deporteSeleccionado,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Padre Deportes</h1>
        <hr />
        <h2>Su deporte favorito es : {this.state.favorito}</h2>
        {this.deportes.map((deporte, index) => {
          return (
            <HijoDeportes
              mostrarFavorito={this.mostrarFavorito}
              key={index}
              nombre={deporte}
            />
          );
        })}
      </div>
    );
  }
}
