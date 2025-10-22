import React, { Component } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class UpdateDepartamentos extends Component {
  cajanumero = React.createRef();
  cajanombre = React.createRef();
  cajalocalidad = React.createRef();
  state = {
    mensaje: "",
    status: false,
  };

  putDepartamento = (event) => {
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
      .put(
        "https://apicruddepartamentoscore.azurewebsites.net/api/Departamentos",
        dept
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
          <label htmlFor="">Numero</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajanumero}
            defaultValue={this.props.id}
          />
          <br />
          <label htmlFor="">Nombre</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajanombre}
            defaultValue={this.props.nombre}
          />
          <br />
          <label htmlFor="">Localidad</label>
          <input
            className="form-control"
            type="text"
            ref={this.cajalocalidad}
            defaultValue={this.props.localidad}
          />
          <br />

          <button className="btn btn-danger" onClick={this.putDepartamento}>
            Agregar
          </button>
        </form>
      </div>
    );
  }
}
