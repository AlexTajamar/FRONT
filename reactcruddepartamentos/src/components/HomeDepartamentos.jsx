import React, { Component } from "react";
import Global from "../Global.js";
import axios from "axios";
import imagen from "./../assets/images/yolanda.webp";
import { NavLink } from "react-router-dom";

export default class HomeDepartamentos extends Component {
  url = Global.urlDepartamentos;
  urldelete =
    "https://apicruddepartamentoscore.azurewebsites.net/api/Departamentos/";
  state = {
    departamentos: [],
    status: false,
  };

  loadDepartamentos = () => {
    axios
      .get(
        "https://apicruddepartamentoscore.azurewebsites.net/api/Departamentos"
      )
      .then((response) => {
        this.setState({
          departamentos: response.data,
          status: true,
        });
      });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  deleteDepartamento = (idDepartamentos) => {
    axios.delete(this.urldelete + idDepartamentos).then((response) => {
      console.log("deleted");
      this.loadDepartamentos();
    });
  };

  render() {
    if (this.state.status == false) {
      return (
        <img
          src={imagen}
          style={{ width: "600px", height: "600px" }}
          alt="loading"
        ></img>
      );
    } else {
    }
    return (
      <div>
        <h1>Home Departamentos</h1>
        <table className="table tab-content">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Nombre</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.departamentos.map((d, index) => {
              return (
                <tr key={index}>
                  <td>{d.numero}</td>
                  <td>{d.nombre}</td>
                  <td>{d.localidad}</td>
                  <td>
                    <NavLink
                      className="btn btn-danger"
                      to={`/update/${d.numero}/${d.nombre}/${d.localidad}`}
                    >
                      Update
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-dark"
                      onClick={() => {
                        this.deleteDepartamento(d.numero);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
