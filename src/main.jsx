import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import MoviesContext from "./context/MoviesContext";
import ThemeContext from "./context/ThemeContext";


ReactDOM.render(
  <React.StrictMode>
    
      <ThemeContext>
        <MoviesContext>
          <App />
        </MoviesContext>
      </ThemeContext>

  </React.StrictMode>,
  document.getElementById("root")
);
