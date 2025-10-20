import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TablaMultiplicar from "./TablaMultiplicar";
import Notfound from "./Notfound";
import { useParams } from "react-router-dom";

export default class AppRouter extends Component {
  render() {
    function TablaMultiplicarElement() {
      //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS
      //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS

      var { minumero } = useParams();
      return <TablaMultiplicar numero={minumero}></TablaMultiplicar>;
    }
    //DEVOLVEMOS EL COMPONENTE TABLA MULTIPLICAR CON SUS PROPS

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabla/:minumero" element={<TablaMultiplicar />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
