import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Trabajadores from "./components/Trabajadores";
import HospitalesMultiple from "./components/HospitalesMultiple";
import {useParams}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HospitalesMultiple />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
