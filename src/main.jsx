import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import MoviesContext from "./context/MoviesContext";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <ThemeContext>
        <MoviesContext>
          <App />
        </MoviesContext>
      </ThemeContext>
    </UserContext>
  </React.StrictMode>,
  document.getElementById("root")
);
