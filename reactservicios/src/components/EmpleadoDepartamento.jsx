import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'


export default class EmpleadoDepartamento extends Component {
  url = Global.urlEmpleados
  urlDept = Global.urlDept
  selectDepartamento = React.createRef()
   
buscarEmpleados = (event) => {
 let id = this.selectDepartamento.current.value
 
event.preventDefault()
axios.get(this.url +"/"+ id).then(response =>{
   console.log("LeyendoEmpleados")
  this.setState({
   empleados : response.data
  })
})



}

loadDepartamentos = () =>{
  axios.get(this.urlDept + "webresources/departamentos").then(response =>{
   
this.setState({
  departamentos :response.data
})    

  })
}
componentDidMount(){
  this.loadDepartamentos()
}


state={
  empleados : [],
  departamentos : []
}

  render() {
    return (
      <div>
        <h1>Empleados Departamentos</h1>         
        <form>
        <label htmlFor="">Indroduzca ID</label>
        <select ref={this.selectDepartamento}>
          {
            this.state.departamentos.map((dept,index)=>{
              return (<option key={index} value={dept.numero}>{dept.numero}</option>)
            })
          }
        </select>
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
