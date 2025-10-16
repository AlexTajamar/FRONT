import React, { Component } from "react";

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef();

  generarMultiplos = (event) => {
    event.preventDefault();

    let numero = parseInt(this.cajaNumero.current.value);
    let auxNum = [];
    for (var i = 0; i <= 10; i++) {
      auxNum.push(numero * i);
    }
    this.setState({
      numeros: auxNum,
    });
  };

  state = {
    numeros: [],
  };

  render() {
    return (
      <div>
        <h1>Tabla de multiplicar </h1>
        <form onSubmit={this.generarMultiplos}>
          <label htmlFor="">Introduzca Número </label>
          <input type="text" ref={this.cajaNumero} />
          <button>Mostrar Conjetura</button>
          <table border="1">
            <thead>
              <tr>
                <td>Operación</td>
                <td>Resultado</td>
              </tr>
            </thead>
            <tbody>
              {this.state.numeros.map((num, index) => {
                return (
                  <tr>
                    <td key={index}>
                      {this.cajaNumero.current.value}*{index}
                    </td>
                    <td key={index}>{num}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
