import { Component } from "react";

class HijoDeportes extends Component {
  state = {
    favorito: "",
  };
  mostrarFavorito = () => {
    this.setState({
      favorito: this.props.nombre,
    });
  };
  render() {
    return (
      <div>
        <h3 style={{ color: "blue" }}>Hijo Deportes</h3>
        <h3 style={{ color: "fuchsia" }}>Deporte : {this.props.nombre}</h3>
        <h4 style={{ backgroundColor: "yellow" }}>
          su deporte favorito es : {this.state.favorito}
        </h4>
        <button onClick={this.mostrarFavorito}>Favorito</button>
        <hr />
      </div>
    );
  }
}

export default HijoDeportes;
