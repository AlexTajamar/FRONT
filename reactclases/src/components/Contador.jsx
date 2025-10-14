import { Component } from "react";

//Podemos declarar metodos fuera de la clase
// y dichos metodos no utilizan nada del component y sedeclaran como funtion

function metodoAbsurdo() {
  console.log("metodo sin funcionalidad");

  //si es externo no lleva this
}

class Contador extends Component {
  //LA SINTAX DEL CODIGO HTML HA CAMBIADO
  //1 RENDER Y DENTRO DE RENDER PONDREMOS RETURN
  //Las variables se declaran a nivel de clases (nada de va const)
  numero = 0;
  // con los metodos sucede exctamente lo mismo
  incrementarNum = () => {
    //Para acceder a las vaiables de clase de forma obligatoria hay que
    // utilizar this

    this.numero += 1;
    console.log("Valor del numero : " + this.numero);
  };

  //Vaiables state son declaradas en el objeto de la clase

  state = {
    valor: parseInt(this.props.inicio),
  };

  incrementarValor = () => {
    this.setState({
      valor: this.state.valor + 1,
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue" }}>
          Ejemplo contador JSX {this.props.inicio}
        </h1>
        <h2 style={{ color: "pink" }}>{this.state.valor}</h2>
        <b utton onClick={this.incrementarNum}>
          Incrementar numero
        </b>
        <button
          onClick={() => {
            metodoAbsurdo();
            this.incrementarNum();
            this.incrementarValor();
          }}
        >
          funcion anónima
        </button>
      </div>
    );
  }
}

export default Contador;
