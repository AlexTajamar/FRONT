import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import DetallesDoctor from "./DetallesDoctor";

export default class Doctores extends Component {
  url = Global.apiDoctores;
  state = {
    doctores: [],
    iddoctor: "",
  };

  loadDoctores = () => {
    let request = "api/doctores/doctoreshospital/" + this.props.idhospital;
    axios.get(this.url + request).then((response) => {
      this.setState({
        doctores: response.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadDoctores();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospital != this.props.idhospital) {
      this.loadDoctores();
      this.setState({
        iddoctor: "",
      });
    }
  };

  buscarid = (iddoctor) => {
    console.log(iddoctor);
    this.setState({
      iddoctor: iddoctor,
    });

    return <DetallesDoctor iddoctor={iddoctor} />;
  };

  render() {
    return (
      <div>
        <h1>Doctores {this.props.idhospital}</h1>
        <table className="table table secondary">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Id Hospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.doctores.map((doctor, index) => {
              return (
                <tr key={index}>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.salario}</td>
                  <td>{doctor.idHospital}</td>
                  <td>
                    <button
                      onClick={() => this.buscarid(doctor.idDoctor)}
                      style={{ color: "yellow", backgroundColor: "green" }}
                    >
                      Detalles
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {this.state.iddoctor && (
          <DetallesDoctor iddoctor={this.state.iddoctor}></DetallesDoctor>
        )}
      </div>
    );
  }
}
