import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import RouterConfig from "./client/router/Routerconfig";
import RouterConfigFreelancer from "./freelancer/router/Routerconfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <HashRouter basename="/">
      <RouterConfig />
      <RouterConfigFreelancer />
    </HashRouter>
  </Provider>
);
