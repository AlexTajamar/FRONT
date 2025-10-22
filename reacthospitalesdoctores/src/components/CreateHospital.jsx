import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class CreateHospital extends Component {
  state = {
    mensaje: "",
    status: false,
  };
  url = Global.apiHospitales;
  cajaId = React.createRef();
  cajaNombre = React.createRef();
  cajaTelefono = React.createRef();
  cajaDireccion = React.createRef();
  cajaCamas = React.createRef();

  insertHospital = (event) => {
    event.preventDefault();

    let cajaid = parseInt(this.cajaId.current.value);
    let cajaNombre = this.cajaNombre.current.value;
    let cajaTelefono = this.cajaTelefono.current.value;
    let cajaDireccion = this.cajaDireccion.current.value;
    let cajaCamas = parseInt(this.cajaCamas.current.value);

    let hospital = {
      idhospital: cajaid,
      nombre: cajaNombre,
      direccion: cajaDireccion,
      telefono: cajaTelefono,
      camas: cajaCamas,
    };

    axios
      .post(this.url + "webresources/hospitales/post", hospital)
      .then((response) => {
        this.setState({
          mensaje: "Hospital insertado",
          status: true,
        });
      });
  };
  render() {
    return (
      <div>
        {this.state.status == true && <Navigate to="/hospitales" />}
        <h1>Create Hospital</h1>
        <form>
          <label htmlFor="">cajaId</label>
          <input className="form-control" type="text" ref={this.cajaId} />
          <br />
          <label htmlFor="">cajaNombre</label>
          <input className="form-control" type="text" ref={this.cajaNombre} />
          <br />
          <label htmlFor="">cajaTelefono</label>
          <input className="form-control" type="text" ref={this.cajaTelefono} />
          <br />
          <label htmlFor="">cajaDireccion</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajaDireccion}
          />
          <br />
          <label htmlFor="">cajaCamas</label>
          <input className="form-control" type="text" ref={this.cajaCamas} />
          <br />
          <button className="btn btn-danger" onClick={this.insertHospital}>
            Agregar
          </button>
        </form>

        {this.state.mensaje && <h3>{this.state.mensaje}</h3>}
      </div>
    );
  }
}
