import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Principal from "./Principal";
import Formulario from "./Formulario";
//IMPORTANTE IMPORTAR TODOS LOS COMPONENTES QUE QUERAMOS EN LAS ROUTER
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/Formulario" element={<Formulario />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
