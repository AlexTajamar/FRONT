import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PadreMatematicas from "./components/PadreMatematica";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SumarNumeros numero1="77" numero2="99"></SumarNumeros>
    <SumarNumeros numero1="7" numero2="9"></SumarNumeros> */}
    <PadreMatematicas></PadreMatematicas>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
