import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import index from "./js/index"; // I added this. It was an instruction from previously in the tutorial.

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);