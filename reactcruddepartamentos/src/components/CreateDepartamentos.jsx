import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default class CreateDepartamentos extends Component {
  cajanumero = React.createRef();
  cajanombre = React.createRef();
  cajalocalidad = React.createRef();

  state = {
    mensaje: "",
    status: false,
  };

  insertDepartamento = (event) => {
    event.preventDefault();
    let cajanumero = parseInt(this.cajanumero.current.value);
    let cajanombre = this.cajanombre.current.value;
    let cajalocalidad = this.cajalocalidad.current.value;

    let dept = {
      numero: cajanumero,
      nombre: cajanombre,
      localidad: cajalocalidad,
    };

    axios
      .post(
        "https://apicruddepartamentoscore.azurewebsites.net/api/Departamentos",
        dept
      )
      .then((response) => {
        this.setState({
          mensaje: "Insertado Dept",
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
          <label htmlFor="">Numero</label>
          <input className="form-control" type="text" ref={this.cajanumero} />
          <br />
          <label htmlFor="">Nombre</label>
          <input className="form-control" type="text" ref={this.cajanombre} />
          <br />
          <label htmlFor="">Localidad</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajalocalidad}
          />
          <br />

          <button className="btn btn-danger" onClick={this.insertDepartamento}>
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
