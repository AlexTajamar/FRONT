import React, { Component } from "react";
export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Principal</a>
          </li>

          <li>
            <a href="/Formulario">Formulario</a>
          </li>
          <li>
            <a href="/Collatz">Collatz</a>
          </li>
          <li>
            <a href="/TablaMultiplicar">Tabla Multiplicar</a>
          </li>
          <li>
            <a href="/TablaMultiplicarv2">Tabla MultiplicarV2</a>
          </li>
          <li>
            <a href="/SeleccionMultiple">Selección Múltiple</a>
          </li>
        </ul>
      </div>
    );
  }
}
