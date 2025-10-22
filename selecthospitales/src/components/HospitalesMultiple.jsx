import React, { Component } from "react";
import Trabajadores from "./Trabajadores";
import Global from "../Global";
import axios from "axios";

export default class HospitalesMultiple extends Component {
  url = Global.url;
  selectHospital = React.createRef();

  state = {
    hospitales: [],
    hospitalSeleccionado: [],
    salario: "",
  };
  loadHospital = () => {
    axios.get(this.url).then((response) => {
      this.setState({
        hospitales: response.data,
      });
    });
  };

  getHospitalesSeleecionados = (event) => {
    event.preventDefault();
    let select = this.selectHospital.current.options;
    let aux = [];

    for (var option of select) {
      if (option.selected == true) {
        aux.push(option.value);
      }
    }
    this.setState({
      hospitalSeleccionado: aux,
    });
  };

  componentDidMount = () => {
    this.loadHospital();
  };

  render() {
    return (
      <div>
        <h1>Hospitales select</h1>
        <form>
          <select multiple ref={this.selectHospital}>
            {this.state.hospitales.map((hospital, index) => {
              return (
                <option key={index} value={hospital.idHospital}>
                  {hospital.nombre}
                </option>
              );
            })}
          </select>
          <button
            onClick={this.getHospitalesSeleecionados}
            className="btn btn-success"
          >
            Mostrar Trabajadores
          </button>
         
        </form>
        {this.state.hospitalSeleccionado.length != 0 && (
          <Trabajadores idhospitales={this.state.hospitalSeleccionado} />
        )}
      </div>
    );
  }
}
