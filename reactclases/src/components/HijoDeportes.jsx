import { Component } from "react";

class HijoDeportes extends Component {
  seleccionarFavorito = () => {
    //CAPTURAMOS EL DEPORTE DEL PROPIO COMPONENT
    var deporte = this.props.nombre;
    console.log("Deporte favorito : " + deporte);
    //REALIZAMOS LA PETICION AL PADRE
    this.props.mostrarFavorito(deporte);
  };
  render() {
    return (
      <div>
        <h3 style={{ color: "blue" }}>Hijo Deportes : {this.props.nombre}</h3>
        <button onClick={this.seleccionarFavorito}>Favorito</button>
        <hr />
        {Array.isArray(this.props.nombre) &&
          this.props.nombre.map((nombre, index) => {
            return (
              <HijoDeportes
                key={index}
                nombre={nombre}
                style={{ color: "green" }}
              />
            );
          })}
      </div>
    );
  }
}

export default HijoDeportes;
