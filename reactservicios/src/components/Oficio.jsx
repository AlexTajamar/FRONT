import React, { Component, createRef } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class Oficio extends Component {
  selectOficio = React.createRef()
  url = Global.urlOficio

  state = {
    empleados1: [],
    oficios: []
  }
  buscarEmpleados = (event) => {
 let of = this.selectOficio.current.value
 
event.preventDefault()
axios.get("https://apiempleadosspgs.azurewebsites.net/api/Empleados/EmpleadosOficio/"+of).then(response =>{
   console.log("LeyendoEmpleados")
   console.log( response.data)
  this.setState({

   empleados1 : response.data
  })
})



}

  loadOficios = () => {
    axios.get(this.url).then(response => {
      const empleados = response.data

      const oficiosUnicos = []
      empleados.forEach(emp => {
        if (!oficiosUnicos.find(oficio => oficio === emp.oficio)) {
          oficiosUnicos.push(emp.oficio)
        }
      })

      this.setState({
        oficios: oficiosUnicos
      })
    })
  }

  componentDidMount() {
    this.loadOficios()
  }

  render() {
    return (
      <div>
        <h1>Oficios</h1>
        <label>Selecciona el oficio</label>
        <select onChange={this.buscarEmpleados} ref={this.selectOficio}>
          {this.state.oficios.map((oficio, index) => (
            <option key={index} value={oficio}>
              {oficio}
            </option>
          ))}
        </select>
  <ul>
        {
          this.state.empleados1.map((empleado,index)=>{
            return (<li key={index}>{empleado.apellido}</li>)
          })
        }
      </ul>
      </div>
    )
  }
}
