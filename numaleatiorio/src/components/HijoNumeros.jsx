import { Component } from "react";

class HijoNumeros extends Component {
  seleccionarNumero = () => {
    let numero = parseInt(this.props.numero);
    this.props.sumaNumeros(numero);
  };
  render() {
    return (
      <div>
        <h1>Numero : {this.props.numero} </h1>
        <button onClick={this.seleccionarNumero}>
          Suma {this.props.numero}
        </button>
      </div>
    );
  }
}

export default HijoNumeros;
