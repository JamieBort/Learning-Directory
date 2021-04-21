// src/js/reducers/index.js

// Reducers - Redux reducer is just a JavaScript function. It takes two parameters: the current state and action. Returns the (new) state.

// const initialState = {
//     articles: []
//   };
  
//   function rootReducer(state = initialState, action) { // **** This reducer does nothing. So we refactor it below. ***
//     return state;
//   };
  
//   export default rootReducer;

// ************************************************************

// import { ADD_ARTICLE } from "../constants/action-types";

// const initialState = {
//   articles: []
// };

// function rootReducer(state = initialState, action) {
//   if (action.type === ADD_ARTICLE) {
//     state.articles.push(action.payload); // *** Array.prototype.push is an impure function: it modifies the original array. But there's more. We're also changing the initial state in place. So we re-factory once more. See below. ***
//   }
//   return state;
// }

// export default rootReducer;

// ************************************************************

import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, { // use Object.assign or object spread of objects to avoid mutations in Redux.
      articles: state.articles.concat(action.payload) // use concat, slice, or the spread operator for arrays to avoid mutations in Redux.
    });
  }
  return state;
}

export default rootReducer;