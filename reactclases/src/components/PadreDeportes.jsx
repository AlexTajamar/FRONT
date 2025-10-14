import { Component } from "react";
import HijoDeportes from "./HijoDeportes";

class PadreDeportes extends Component {
  deportes = ["TENIS", "FUTBOL", "BASKET", "GOLF"];
  render() {
    return (
      <div>
        <h1 style={{ color: " red" }}>
          <hr />
          Padre Deportes
          <hr />
          {this.deportes.map((deporte, index) => {
            return <HijoDeportes key={index} nombre={deporte}></HijoDeportes>;
          })}
        </h1>
      </div>
    );
  }
}

export default PadreDeportes;
