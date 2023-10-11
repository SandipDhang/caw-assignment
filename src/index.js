import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { Store } from "./redux";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Home />
    </Provider>
  </React.StrictMode>
);

