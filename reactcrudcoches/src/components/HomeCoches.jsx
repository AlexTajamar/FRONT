import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class HomeCoches extends Component {
  state = {
    coches: [],
  };

  loadCoches = () => {
    axios
      .get("https://apicorecrudcoches.azurewebsites.net/api/Coches")
      .then((response) => {
        this.setState({
          coches: response.data,
        });
      });
  };
  deleteCoches = (id) => {
    axios
      .delete(
        "https://apicorecrudcoches.azurewebsites.net/api/Coches/DeleteCoche/" +
          id
      )
      .then((response) => {
        console.log("Eliminado");
        this.loadCoches();
      });
  };

  componentDidMount = () => {
    this.loadCoches();
  };
  render() {
    return (
      <div>
        <h1>Coches</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coches.map((c, index) => {
              return (
                <tr key={index}>
                  <th>{c.marca}</th>
                  <th>{c.modelo}</th>
                  <th>{c.conductor}</th>
                  <th>
                    <img
                      src={c.imagen}
                      alt="coche"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </th>
                  <th>
                    <NavLink
                      className="btn btn-danger"
                      to={"/update/" + c.idCoche}
                    >
                      Update
                    </NavLink>{" "}
                  </th>
                  <th>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteCoches(c.idCoche)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
