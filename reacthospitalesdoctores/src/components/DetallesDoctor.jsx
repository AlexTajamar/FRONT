import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

export default class DetallesDoctor extends Component {
  iddoctor = this.props.iddoctor; //NO HACER ESTO NO SE RECARGA SI LO HACES ASI
  url = Global.apiDoctor;
  state = {
    doctor: "",
  };

  loadDoctor = () => {
    axios
      .get(
        "https://apidoctoresroutes2023.azurewebsites.net/api/doctores/" +
          this.props.iddoctor
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          doctor: response.data,
        });
      });
  };

  componentDidMount = () => {
    this.loadDoctor();
  };

  componentDidUpdate = (old) => {
    if (old.iddoctor != this.props.iddoctor) {
      this.loadDoctor();
    }
  };

  render() {
    return (
      <div>
        <h1>Detalles Doctor : </h1>
        <table className="table table primary">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Id </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.doctor.apellido}</td>
              <td>{this.state.doctor.especialidad}</td>
              <td>{this.state.doctor.salario}</td>
              <td>{this.state.doctor.idHospital}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
