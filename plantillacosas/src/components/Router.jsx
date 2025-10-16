import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import Principal from "./Principal";
import Formulario from "./Formulario";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicarv2 from "./TablaMultiplicar";
import SeleccionMultiple from "./SeleccionMultiple";

//IMPORTANTE IMPORTAR TODOS LOS COMPONENTES QUE QUERAMOS EN LAS ROUTER
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/Formulario" element={<Formulario />}></Route>
          <Route path="/Collatz" element={<Collatz />}></Route>
          <Route
            path="/SeleccionMultiple"
            element={<SeleccionMultiple />}
          ></Route>

          <Route
            path="/TablaMultiplicar"
            element={<TablaMultiplicar />}
          ></Route>
          <Route
            path="/TablaMultiplicarv2"
            element={<TablaMultiplicarv2 />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
