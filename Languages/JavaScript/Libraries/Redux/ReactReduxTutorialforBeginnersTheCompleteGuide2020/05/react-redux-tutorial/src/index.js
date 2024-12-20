// src/index.js

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import index from "./js/index"; // I added this. It was an instruction from previously in the tutorial.

// console.log(index); // added this line to silence the warning: "src/index.js Line 6:8:  'index' is defined but never used"

render(
  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// export default index;