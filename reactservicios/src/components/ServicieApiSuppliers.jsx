import React, { Component } from "react";
import axios from "axios";
export default class ServicieApiSuppliers extends Component {
  idNombre = React.createRef();

  url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers ";
  state = {
    suppliers: [],
    id: "",
  };
  loadSupplier = () => {
    console.log("Antes del servicio");
    axios.get(this.url).then((response) => {
      console.log("Dentro del servicio");
      console.log(response.data);
      this.setState({
        suppliers: response.data.value,
      });
    });
  };
  componentDidMount = () => {
    console.log("Creando Compnent");
    this.loadSupplier();
  };

  peticionFormulario = (event) => {
    event.preventDefault();
    console.log("Peticion lista");

    let idN = this.idNombre.current.value;
    console.log("id " + idN);

    this.setState({
      id: idN,
    });
  };
  render() {
    return (
      <div>
        <h1>ServicieApiSuppliers</h1>
        <button>Load Suppliers</button>
        {this.state.suppliers.map((supp, index) => {
          return (
            <div>
              <h3>{supp.ContactName}</h3>
              <h3>{supp.SupplierID}</h3>
            </div>
          );
        })}
        <div>
          <h1>Formulario</h1>
          <form onSubmit={this.peticionFormulario}>
            <label>id : </label>

            <input type="text" ref={this.idNombre} />
            <button>Realizar peticion</button>
          </form>
          <h1>ID es : {this.state.id}</h1>
        </div>
        <h3>
          {this.state.suppliers.map((supp, index) => {
            if (supp.SupplierID == this.state.id) {
              return <div>{this.state.suppliers[index].SupplierID}</div>;
            }
          })}
        </h3>
      </div>
    );
  }
}
