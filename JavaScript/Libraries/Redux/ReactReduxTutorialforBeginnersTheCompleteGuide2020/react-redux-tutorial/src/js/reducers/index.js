// src/js/reducers/index.js

// Reducers - Redux reducer is just a JavaScript function. It takes two parameters: the current state and action. Returns the (new) state.

const initialState = {
    articles: []
  };
  
  function rootReducer(state = initialState, action) {
    return state;
  };
  
  export default rootReducer;