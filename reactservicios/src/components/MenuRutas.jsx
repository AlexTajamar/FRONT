import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tabla/:minumero">Tabla Multiplicar</a>
          </li>
        </ul>
      </div>
    );
  }
}
