import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  state = {
    tabla: [],
  };

  componentDidMount() {
    this.generarTabla();
  }

  generarTabla = () => {
    let aux = [];
    let numero = parseInt(this.props.numero);

    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      aux.push(resultado);
    }

    this.setState({
      tabla: aux,
    });
  };

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <h3>Número: {this.props.numero}</h3>
        <ul>
          {this.state.tabla.map((numero, index) => {
            return <li key={index}>{numero}</li>;
          })}
        </ul>
      </div>
    );
  }
}
