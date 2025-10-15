import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
  deportes = ["TENIS", "FUTBOL", "BASKET", "GOLF"];
  state = {
    favorito: "",
  };

  mostrarFavorito = (deporte) => {
    this.setState({
      favorito: deporte,
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ color: " red" }}>
          <hr />
          Padre Deportes
          <hr />
          <h4 style={{ backgroundColor: "yellow" }}>
            su deporte favorito es : {this.state.favorito}
          </h4>
          {this.deportes.map((deporte, index) => {
            return (
              <HijoDeportes
                key={index}
                nombre={deporte}
                mostrarFavorito={this.mostrarFavorito}
              ></HijoDeportes>
            );
          })}
        </h1>
      </div>
    );
  }
}

export default PadreDeportes;
