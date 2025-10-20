import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
export default class Empleados extends Component {
  state = {
    empleados: [],
    texto: "",
  };
  componentDidUpdate = (oldProps) => {
    console.log("Dibujando component con Update");
    //Dibujamos las nuevas y las antiguas
    console.log("Current " + this.props.iddepartamento);
    console.log("Old " + oldProps.iddepartamento);
    //NUNCA CAMBIAR EL STATE SIN UN IF

    //ACTUALIZAMOS STATE SI  PROPS HA CAMBIADO
    if (oldProps.iddepartamento != this.props.iddepartamento) {
      
        this.loadEmpleados()
      
    }
  };
  url = Global.urlEmpleados;
  loadEmpleados = () => {
    let idDepartamento = this.props.iddepartamento;
    axios.get(this.url + "/" + idDepartamento).then((response) => {
      console.log("leyemdo");
      this.setState({
        empleados: response.data,
      });
    });
    this.componentDidMount = () => {
      console.log("Cargando Empleados");
      this.loadEmpleados();
    };
  };
  render() {
    return (
      <div>
        <h1>Empleados</h1>
        <h1>{this.state.texto}</h1>

        {this.props.iddepartamento}
        <ul>
          {this.state.empleados.map((empleado, index) => {
            return (
              <li key={index}>
                {empleado.apellido}-{empleado.oficio}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
