import { Component } from "react";

class Comics extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>{this.props.comic.titulo}</h1>
        <img
          src={this.props.comic.imagen}
          style={{ width: "150px", height: "150px" }}
          alt=""
        />
        <h3>{this.props.comic.descripcion}</h3>
        <button
          onClick={() => {
            this.props.seleccionarFavorito(this.props.comic);
          }}
        >
          Selecciona favorito
        </button>
        <button
          onClick={() => {
            this.props.deleteComic(this.props.index);
          }}
        >
          Elimnar Comic{" "}
        </button>
      </div>
    );
  }
}
export default Comics;
