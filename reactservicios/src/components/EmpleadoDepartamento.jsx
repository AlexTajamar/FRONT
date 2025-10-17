import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'


export default class EmpleadoDepartamento extends Component {
  url = Global.urlEmpleados
  cajaDepartamento = React.createRef()
   
buscarEmpleados = (event) => {
 let id = this.cajaDepartamento.current.value
 
event.preventDefault()
axios.get(this.url +"/"+ id).then(response =>{
   console.log("LeyendoEmpleados")
  this.setState({
   empleados : response.data
  })
})

}
state={
  empleados : []
}

  render() {
    return (
      <div>
        <h1>Empleados Departamentos</h1>         
        <form>
        <label htmlFor="">Indroduzca ID</label>
        <input type="text"  ref={this.cajaDepartamento}/>
        <button onClick={this.buscarEmpleados}> Action</button>

      </form>
      <ul>
        {
          this.state.empleados.map((empleado,index)=>{
            return (<li key={index}>{empleado.apellido}</li>)
          })
        }
      </ul>
      </div>
     
    )
  }
}
