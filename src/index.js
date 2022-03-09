import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FinderProvider } from "./context/FinderContext";

ReactDOM.render(
  <FinderProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FinderProvider>,
  document.getElementById("root")
);
