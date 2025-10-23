import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default class UpdateCoches extends Component {
  cajamarca = React.createRef();
  cajanmodelo = React.createRef();
  cajaconductor = React.createRef();
  state = {
    mensaje: "",
    status: false,
  };

  putCoche = (event) => {
    console.log(this.props.id);
    event.preventDefault();

    let cajamarca = this.cajamarca.current.value;
    let cajanmodelo = this.cajanmodelo.current.value;
    let cajaconductor = this.cajaconductor.current.value;

    let coche = {
      idCoche: Number(this.props.id),
      marca: cajamarca,
      modelo: cajanmodelo,
      conductor: cajaconductor,
      imagen: "",
    };
    console.log(coche);
    axios
      .put(
        "https://apicorecrudcoches.azurewebsites.net/api/Coches/UpdateCoche/",
        coche
      )
      .then((response) => {
        this.setState({
          mensaje: "Modificado Dept",
          status: true,
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/" />}
        <h1>Update</h1>
        <form>
          <label htmlFor="">Marca</label>
          <input className="form-control" type="text" ref={this.cajamarca} />
          <br />
          <label htmlFor="">Modelo</label>
          <input className="form-control" type="text" ref={this.cajanmodelo} />
          <br />
          <label htmlFor="">Conductor</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajaconductor}
          />
          <br />

          <button className="btn btn-danger" onClick={this.putCoche}>
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
