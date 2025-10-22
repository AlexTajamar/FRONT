import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "../Global";

export default class MenuHospitales extends Component {
  url = Global.apiHospitales;
  state = {
    hospitales: [],
  };
  loadHospitales = () => {
    axios.get(this.url + "/webresources/hospitales").then((response) => {
      this.setState({
        hospitales: response.data,
      });
    });
  };
  componentDidMount = () => {
    this.loadHospitales();
  };
  render() {
    return (
      <div>
        {/* CAMBIOS AQUÍ: 
                  1. 'bg-dark' para el fondo oscuro.
                  2. 'data-bs-theme="dark"' para que el texto sea claro.
                  3. Eliminado el prop 'to="/"' de la etiqueta <nav> (no es válido ahí).
                */}
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            {/* El 'brand' (logo/título) ahora apunta a la raíz '/' */}
            <NavLink className="navbar-brand" to="/">
              Navbar
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* Quitada la clase 'active' manual.
                                      NavLink la añadirá automáticamente cuando la ruta coincida.
                                    */}
                  <NavLink className="nav-link" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  {/* Quitada la clase 'active' manual.
                                      NavLink la añadirá automáticamente cuando la ruta coincida.
                                    */}
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/hospitales"
                  >
                    Hospitales
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/doctores/22">
                    Doctores22
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hospitales
                  </NavLink>
                  <ul className="dropdown-menu">
                    {this.state.hospitales.map((hospital, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item"
                            to={"/doctores/" + hospital.idhospital}
                          >
                            {/* Asumo que querías mostrar solo el nombre.
                                                          Si 'hospital.hospital' era correcto, ajústalo.
                                                        */}
                            {hospital.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item">
                  {/* Quitada la clase 'active' manual */}
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/create"
                  >
                    Create
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
