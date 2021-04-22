// src/index.js

// *************************************************

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import index from "./js/index"; // Instructed to add this line at this step: https://www.valentinog.com/blog/redux/#react-redux-tutorial-redux-store-methods. But it's never used. ?

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// *************************************************
// Replaced the above with the below as a result of this section: https://www.valentinog.com/blog/redux/#react-redux-tutorial-app-component-and-redux-store


import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);