import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Alumnos extends Component {
  url = Global.url;

  state = {
    alumno: "",
  };

  componentDidMount() {
    this.loadAlumno();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.idAlumno !== this.props.idAlumno) {
      console.log("Actualizando alumno con ID:", this.props.idAlumno);
      this.loadAlumno();
    }
  }

  loadAlumno = () => {
    axios
      .get(
        "https://apiejemplos.azurewebsites.net/api/Alumnos/FindAlumno/" +
          this.props.idAlumno
      )
      .then((response) => {
        this.setState({ alumno: response.data });
      });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }}>
        <div>
          <h2>{this.state.alumno.nombre}</h2>
          <p>
            <strong>IdAlumno:</strong> {this.state.alumno.idAlumno}
          </p>
          <img src={this.state.alumno.imagen} width="200" />
        </div>
      </div>
    );
  }
}
