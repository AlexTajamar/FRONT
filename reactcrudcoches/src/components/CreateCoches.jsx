import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateCoches extends Component {
  state = {
    mensaje: "",
    status: false,
  };
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajamodelo = React.createRef();
  cajaconductor = React.createRef();
  cajaimg = React.createRef();

  insertCoches = (event) => {
    event.preventDefault();

    let cajaid = parseInt(this.cajaId.current.value);
    let cajaNombre = this.cajaNombre.current.value;
    let cajamodelo = this.cajamodelo.current.value;
    let cajaconductor = this.cajaconductor.current.value;
    let cajaimagen = this.cajaimg.current.value;

    let coche = {
      idCoche: cajaid,
      marca: cajaNombre,
      modelo: cajamodelo,
      conductor: cajaconductor,
      imagen: cajaimagen,
    };

    axios
      .post(
        "https://apicorecrudcoches.azurewebsites.net/api/Coches/InsertCoche",
        coche
      )
      .then((response) => {
        this.setState({
          mensaje: "Coche Insertado",
          status: true,
        });
      });
  };
  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/" />}
        <h1>Create Hospital</h1>
        <form>
          <label htmlFor="">Id Conductor</label>
          <input className="form-control" type="text" ref={this.cajaId} />
          <br />
          <label htmlFor="">Marca</label>
          <input className="form-control" type="text" ref={this.cajaNombre} />
          <br />
          <label htmlFor="">Modelo</label>
          <input className="form-control" type="text" ref={this.cajamodelo} />
          <br />
          <label htmlFor="">Conductor</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajaconductor}
          />
          <br />
          <label htmlFor="">Imagen</label>
          <input className="form-control" type="text" ref={this.cajaimg} />
          <br />
          <button className="btn btn-danger" onClick={this.insertCoches}>
            Agregar
          </button>
        </form>

        {this.state.mensaje && <h3>{this.state.mensaje}</h3>}
      </div>
    );
  }
}
