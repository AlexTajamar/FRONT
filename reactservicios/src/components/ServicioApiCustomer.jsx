import React, { Component } from "react";
import axios from "axios";
import Global from "../Global"


export default class ServicioApiCustomer extends Component {
  state = { customers: [] };

  //Creamos un metodo para cargar los clientes
  loadCustomers = () => {
    console.log("leyendo el servicio");
    axios.get(Global.url2).then((response) => {
      console.log("Dentro del Servicio");
      console.log(response.data);
      this.setState({
        customers: response.data.value,
      });
    });
    console.log("Despues del servicio");
  };

  componentDidMount = () => {
    console.log("Creando Compnent");
    this.loadCustomers();
  };

  render() {
    return (
      <div>
        <h1>ServicioApiCustomer</h1>
        <button>Load Customers</button>
        {this.state.customers.map((cliente, index) => {
          return <h3>{cliente.ContactName}</h3>;
        })}
      </div>
    );
  }
}
