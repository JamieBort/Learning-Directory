// src/js/store/index.js

// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "../reducers/index";
// import { forbiddenWordsMiddleware } from "../middleware";

// const store = createStore(
//   rootReducer,
//   applyMiddleware(forbiddenWordsMiddleware)
// );

// export default store;

// 

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;