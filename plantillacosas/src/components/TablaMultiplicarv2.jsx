import React, { Component } from "react";
export default class TablaMultiplicarv2 extends Component {
  cajaNumero = React.createRef();
  generarAleatorio() {
    var numeros = [];
    for (var i = 0; i <= 6; i++) {
      var num = parseInt(Math.random() * 100) + 1;

      numeros.push(num);
    }
    return numeros;
  }

  generarMultiplos = (event) => {
    event.preventDefault();

    let auxNum = [];
    for (var i = 0; i <= 10; i++) {
      auxNum.push(parseInt(this.cajaNumero.current.value) * i);
    }
    this.setState({
      numeros: auxNum,
    });
  };

  aleatorio = this.generarAleatorio();

  state = {
    opciones: [],
    numeros: [],
  };
  render() {
    return (
      <div>
        <h1>Tabla de multiplicarv2 </h1>
        <form>
          <label>Introduzca Número </label>
          <select onChange={this.generarMultiplos} ref={this.cajaNumero}>
            {this.aleatorio.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
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
