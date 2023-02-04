import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataContext from "./Components/DataContext";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.render(
  <DataContext>
    <Router>
      <App />
    </Router>
  </DataContext>,
  document.getElementById("root")
);

reportWebVitals();
