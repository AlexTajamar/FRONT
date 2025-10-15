import React, { Component } from "react";

export default class FormSimple extends Component {
  cajaNombre = React.createRef();
  peticionFormulario = (event) => {
    event.preventDefault();
    console.log("PeticionLista");
  };

  render() {
    return (
      <div>
        <h1>FormSimple</h1>
        <form onSubmit={this.peticionFormulario}>
          <input type="text" ref={this.cajaNombre}>
            ddddd
          </input>
          <button> REALIZAR PETICION</button>
        </form>
      </div>
    );
  }
}
