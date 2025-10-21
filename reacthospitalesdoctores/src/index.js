import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import $ from "jquery";
import Popper from "popper.js";
import MenuHospitales from "./components/MenuHospitales";
import Home from "./components/Home"; // ✅ Import Home here
import Router from "./Router";
import CreateHospital from "./components/CreateHospital";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);

reportWebVitals();
