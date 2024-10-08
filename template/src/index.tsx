import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./output.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
