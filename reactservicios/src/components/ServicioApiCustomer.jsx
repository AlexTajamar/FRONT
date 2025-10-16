import React, { Component } from "react";
import axios from "axios";

export default class ServicioApiCustomer extends Component {
  state = { customers: [] };
  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";

  //Creamos un metodo para cargar los clientes
  loadCustomers = () => {
    console.log("leyendo el servicio");
    axios.get(this.url).then((response) => {
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
