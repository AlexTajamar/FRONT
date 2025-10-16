import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();

  mostrar = (event) => {
    event.preventDefault();
    var data = "";
    let options = this.selectMultiple.current.options;
    //DEBEMOS RECORREER TODAS LAS OPCIONES

    for (var option of options) {
      if (option.selected == true) {
        console.log(option.value);
        data += option.value + " ";
      }
    }
    this.setState({
      seleccionado: data,
    });
  };

  state = {
    seleccionado: "",
  };
  render() {
    return (
      <div>
        <h1>Selección Múltiple</h1>
        <h2 style={{ color: "blue" }}>{this.state.seleccionado}</h2>
        <form>
          <label htmlFor="">Selecciona varios elementos </label>
          <select size="6" multiple ref={this.selectMultiple}>
            <option>Elemento 1</option>
            <option>Elemento 2</option>
            <option>Elemento 3</option>
            <option>Elemento 4</option>
            <option>Elemento 5</option>
            <option>Elemento 6</option>
            <option>Elemento 7</option>
          </select>
          <button onClick={this.mostrar}> Mostrar resultados</button>
        </form>
      </div>
    );
  }
}
