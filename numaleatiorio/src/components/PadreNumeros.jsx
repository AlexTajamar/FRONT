import { Component } from "react";
import HijoNumeros from "./HijoNumeros";
class PadreNumeros extends Component {
  sumaNumeros = (numero) => {
    console.log(numero);
    this.setState({
      suma: this.state.suma + numero,
    });
  };
  al = [];
  Generarleatorios = () => {
    this.setState({
      numeros: [
        parseInt(Math.random() * 100) + 1,
        parseInt(Math.random() * 100) + 1,
        parseInt(Math.random() * 100) + 1,
        parseInt(Math.random() * 100) + 1,
      ],
    });
  };

  state = {
    suma: 0,
    numeros: [
      parseInt(Math.random() * 100) + 1,
      parseInt(Math.random() * 100) + 1,
      parseInt(Math.random() * 100) + 1,
      parseInt(Math.random() * 100) + 1,
    ],
  };

  render() {
    return (
      <div>
        <h1>PADRE NÚMEROS</h1>
        <h2>LA SUMA ES DE : {this.state.suma} </h2>
        <button onClick={this.Generarleatorios}>Generar Aleatorio</button>
        {this.state.numeros.map((num, index) => {
          return (
            <HijoNumeros
              key={index}
              numero={num}
              sumaNumeros={this.sumaNumeros}
            ></HijoNumeros>
          );
        })}
      </div>
    );
  }
}

export default PadreNumeros;
