import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PadreMatematicas from "./components/PadreMatematica";
import Contador from "./components/contador";
import Coche from "./components/Car";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SumarNumeros numero1="77" numero2="99"></SumarNumeros>
    <SumarNumeros numero1="7" numero2="9"></SumarNumeros> */}
    {/* <PadreMatematicas></PadreMatematicas> */}
    <Coche
      marca="Toyota"
      modelo="corolla"
      velocidadmax="260"
      aceleracion="25"
    ></Coche>
    <Coche
      marca="Toyota"
      modelo="Prius"
      velocidadmax="160"
      aceleracion="30"
    ></Coche>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
