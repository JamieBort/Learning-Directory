// src/js/store/index.js

// Store - holds all of the application's state.

import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;