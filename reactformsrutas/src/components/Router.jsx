import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/form" element="FormSimple"></Route>
          <Route path="/" element="Home"></Route>
          <Route path="/cine" element="Cine"></Route>
          <Route path="/musica" element="Musica"></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
