import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomeDepartamentos from "./components/HomeDepartamentos";
import MenuDepartamentos from "./components/MenuDepartamentos";
import CreateDepartamentos from "./components/CreateDepartamentos";
import UpdateDepartamentos from "./components/UpdateDepartamentos";

export default class Router extends Component {

  render() {
    function UpdateElement() {
      let { id, nombre, localidad } = useParams();
      return (
        <UpdateDepartamentos
          id={id}
          nombre={nombre}
          localidad={localidad}
        ></UpdateDepartamentos>
      );
    }
    return (
      <BrowserRouter>
        <MenuDepartamentos />
        <Routes>
          <Route path="/" element={<HomeDepartamentos />}></Route>
          <Route path="/create" element={<CreateDepartamentos />}></Route>
          <Route
            path="/update/:id/:nombre/:localidad"
            element={<UpdateElement />}
          ></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
