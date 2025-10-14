import { Component } from "react";

class DibujosComplejos extends Component {
  dibujarNum = () => {
    var lista = [];
    for (var i = 0; i <= 7; i++) {
      var numero = parseInt(Math.random() * 100) + 1;
      //Mediante push vamos añadiendo elementos a la lista
      lista.push(<li key={i}>{numero}</li>);
    }
    return lista;
  };
  render() {
    return (
      <div>
        <h1>Dibujar numeros React</h1>
        <ul>{this.dibujarNum()}</ul>
      </div>
    );
  }
}
export default DibujosComplejos;
