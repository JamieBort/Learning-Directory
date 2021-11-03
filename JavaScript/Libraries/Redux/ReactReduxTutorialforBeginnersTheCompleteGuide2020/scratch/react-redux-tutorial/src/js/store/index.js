// src/js/store/index.js

import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Optional code: "Note: if you want to enable Redux Dev Tools use this code." Commented out for now.

const store = createStore(
    rootReducer,
    applyMiddleware(forbiddenWordsMiddleware)
    );

export default store;