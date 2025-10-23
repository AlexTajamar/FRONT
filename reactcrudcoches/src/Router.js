import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import HomeCoches from "./components/HomeCoches";
import MenuCoches from "./components/MenuCoches";
import CreateCoches from "./components/CreateCoches";
import UpdateCoches from "./components/UpdateCoches";

export default class Router extends Component {
  render() {
    function UpdateElement() {
      let { id } = useParams();
      return <UpdateCoches id={id}></UpdateCoches>;
    }
    return (
      <div>
        {" "}
        <BrowserRouter>
          <MenuCoches />
          <Routes>
            <Route path="/" element={<HomeCoches />}></Route>
            <Route path="/create" element={<CreateCoches />}></Route>
            <Route path="/update/:id" element={<UpdateElement />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
