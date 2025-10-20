import React, { Component, useState } from "react";
import axios from "axios";
import Empleados from "./Empleados";
import Global from "../../Global";

export default class Departamentos extends Component {
  selectDepartament = React.createRef();
  url = Global.urlOficio;
  state = {
    departamentos: [],
    idDepartamento: 0,
  };

  loadDepartamentos = () => {
    axios.get(this.url).then((response) => {
      console.log("dentro del servicio");
      this.useState({
        departamentos: response.data,
      });
    });
  };
  componentDidCatch = () => {
    this.loadDepartamentos();
  };

  buscarEmpleados = (event) => {
    event.preventDefault();
    let idDepartamento = this.selectDepartament.current.value;
    this.setState({
      idDepartamento: idDepartamento,
    });
  };
  render() {
    return (
      <div>
        <h1>Departamentos </h1>
        <form action="">
          <select ref={this.selectDepartament}>
            {this.state.departamentos.map((departamrnto, index) => {
              return (
                <option key={index} value={departamrnto.numero}>
                  {departamrnto.nombre}
                </option>
              );
            })}
          </select>
          <button onClick={this.buscarEmpleados}>Pulsame</button>
        </form>
        {this.state.idDepartamento != 0 && (
          <Empleados iddepartamento={this.state.idDepartamento}></Empleados>
        )}
      </div>
    );
  }
}
