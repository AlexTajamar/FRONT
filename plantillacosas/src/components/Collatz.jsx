import React, { Component } from "react";

export default class Collatz extends Component {
  cajaNumero = React.createRef();

  generarCollatz = (event) => {
    event.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value);
    let aux = [];

    while (numero != 1) {
      if (numero % 2 == 0) {
        numero = numero / 2;
      } else {
        numero = numero * 3 + 1;
      }
      aux.push(numero);
    }
    this.setState({
      numeros: aux,
    });
  };

  state = {
    numeros: [],
  };
  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        <form onSubmit={this.generarCollatz}>
          <label htmlFor="">Introduzca Número </label>
          <input type="text" ref={this.cajaNumero} />
          <button>Mostrar Conjetura</button>
          <ul>
            {this.state.numeros.map((num, index) => {
              return <li key={index}>{num}</li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}
