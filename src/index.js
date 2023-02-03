import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GetMovies from "./Components/getMovies";
ReactDOM.render(
  <GetMovies>
    <Router>
      <App />
    </Router>
  </GetMovies>,
  document.getElementById("root")
);

reportWebVitals();
