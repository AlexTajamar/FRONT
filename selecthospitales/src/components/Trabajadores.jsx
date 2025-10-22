// PASO 1: Importa el archivo CSS
import "./Trabajadores.css";
// (Asegúrate de que el nombre coincida con tu archivo CSS)

import React, { Component } from "react";
import axios from "axios";

export default class Trabajadores extends Component {
  incremento = React.createRef();
  state = {
    mensaje: "",
    trabajadores: [],
  };

  loadTrabajadores = () => {
    //Rexuperamos el array de id de hospitales
    let idhospitales = this.props.idhospitales;
    let data = "";

    for (var id of idhospitales) {
      data += "idhospital=" + id + "&";
    }
    //Mensaje : idhospital=19&idhospital=22&idhospital=45&
    data = data.substring(0, data.length - 1);
    this.setState({
      mensaje: data,
    });
    axios
      .get(
        "https://apiejemplos.azurewebsites.net/api/Trabajadores/TrabajadoresHospitales?" +
          data
      )
      .then((response) => {
        this.setState({
          trabajadores: response.data,
        });
      });
  };

  componentDidMount = () => {
    this.loadTrabajadores();
  };

  componentDidUpdate = (old) => {
    if (old.idhospitales !== this.props.idhospitales) {
      this.loadTrabajadores();
    }
  };

  incrementoSalario = () => {
    let incrementoSalario = this.incremento.current.value;
    axios
      .put(
        "https://apiejemplos.azurewebsites.net/api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento=" +
          incrementoSalario +
          "&" +
          this.state.mensaje
      )
      .then((response) => {
        console.log("Modificado Salario");
        this.loadTrabajadores();
      });
  };

  render() {
    return (
      // PASO 2: Aplica la clase CSS al contenedor principal
      <div className="trabajadores-container">
        <input type="text" ref={this.incremento} />
        <button onClick={this.incrementoSalario}>Incrementar Salario</button>
        <h1>Trabajadores</h1>
        <h2>Mensaje : {this.state.mensaje}</h2>
        <table>
          <thead>
            <tr>
              <th>Id Trabajador</th>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>Id Hospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trabajadores.map((t, index) => {
              return (
                <tr key={t.idTrabajador}>
                  {" "}
                  {/* Es mejor usar un ID único que 'index' */}
                  <td>{t.idTrabajador}</td>
                  <td>{t.apellido}</td>
                  <td>{t.oficio}</td>
                  <td>{t.salario}</td>
                  <td>{t.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
