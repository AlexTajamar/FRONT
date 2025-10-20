import React, { Component } from "react";
import Alumnos from "./Alumnos";
import Global from "../../Global";
import axios from "axios";

export default class CursosSelect extends Component {
  selectCursos = React.createRef();

  state = {
    cursos: [],
    alumnosCurso: [],
    idAlumnoSeleccionado: null,
  };

  componentDidMount() {
    this.loadCursos();
  }

  loadCursos = () => {
    axios
      .get("https://apiejemplos.azurewebsites.net/api/Alumnos/Cursos")
      .then((response) => this.setState({ cursos: response.data }));
  };

  buscarAlumnos = () => {
    let idCurso = this.selectCursos.current.value;
    axios
      .get("https://apiejemplos.azurewebsites.net/api/Alumnos")
      .then((response) => {
        const alumnosFiltrados = response.data.filter(
          (alum) => alum.idCurso === parseInt(idCurso)
        );
        this.setState({ alumnosCurso: alumnosFiltrados });
      });
  };

  seleccionarAlumno = (idAlumno) => {
    this.setState({ idAlumnoSeleccionado: idAlumno });
  };

  render() {
    return (
      <div>
        <h1>Selecciona un curso</h1>

        <select onChange={this.buscarAlumnos} ref={this.selectCursos}>
          {this.state.cursos.map((curso, index) => (
            <option key={index} value={curso.idCurso ?? curso}>
              {curso.nombre ?? curso}
            </option>
          ))}
        </select>

        <h2>Alumnos del curso</h2>
        <ul>
          {this.state.alumnosCurso.map((alumno) => (
            <li key={alumno.idAlumno}>
              {alumno.nombre}
              <button onClick={this.seleccionarAlumno(alumno.idAlumno)}>
                Detalles
              </button>
            </li>
          ))}
        </ul>

        {this.state.idAlumnoSeleccionado && (
          <Alumnos idAlumno={this.state.idAlumnoSeleccionado} />
        )}
      </div>
    );
  }
}
