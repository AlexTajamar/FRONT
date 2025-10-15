import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route } from "react-router-dom";
import Router from "./components/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <header>
      <a href="/">Home </a>
      <a href="/cine"> Cine</a>
      <a href="/musica"> Musica</a>
      <a href="/form"> Formulario</a>
    </header>
    <Router></Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
