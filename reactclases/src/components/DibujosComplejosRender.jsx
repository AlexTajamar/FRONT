import { Component } from "react";

class DibujosNombres extends Component {
  state = {
    nombres: ["Julia", "Patri", "Marcelo", "CRISTIANO GOAT"],
  };
  addNombre = () => {
    this.state.nombres.push("MESSIRVE");
    this.setState({
      nombres: this.state.nombres,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>Dibujos Complejos Render</h1>
        <button onClick={this.addNombre}>AÑADIR</button>
        {
          //ESTE CODIGO JSX REACT DEBE CONTENER UN RETURN
          this.state.nombres.map((name, index) => {
            //este codigo no puede estar vacio
            return <h3 key={index}>{name}</h3>;
          })
        }
      </div>
    );
  }
}

export default DibujosNombres;
