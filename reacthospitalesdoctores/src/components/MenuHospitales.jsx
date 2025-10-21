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
        <nav className="navbar navbar-expand-lg bg-body-tertiary" to="/">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="#">
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
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
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
                    Dropdown
                  </NavLink>
                  <ul className="dropdown-menu">
                    {this.state.hospitales.map((hospital, index) => {
                      return (
                        <li key={index}>
                          <NavLink
                            className="dropdown-item"
                            to={"/doctores/" + hospital.idhospital}
                          >
                            {hospital.hospital}
                            {hospital.nombre}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link disabled" aria-disabled="true">
                    Disabled
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
