// src/js/reducers/index.js

// ************************************************************
// below is commented out because it is replaced with the code underneath it.
// ************************************************************

// Reducers - Redux reducer is just a JavaScript function. It takes two parameters: the current state and action. Returns the (new) state.

// const initialState = {
//     articles: []
//   };

//   function rootReducer(state = initialState, action) { // **** This reducer does nothing. So we refactor it below. ***
//     return state;
//   };

//   export default rootReducer;


// ************************************************************
// below is commented out because it is replaced with the code underneath it.
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
import { REMOVE_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        console.log("action:",action);
        console.log("state:",state);
        return Object.assign({}, state, { // use Object.assign or object spread of objects to avoid mutations in Redux.
            articles: state.articles.concat(action.payload) // use concat, slice, or the spread operator for arrays to avoid mutations in Redux.
        });
    }
    if (action.type === REMOVE_ARTICLE) {
        console.log("action:",action);
        // console.log("action.payload:",action.payload);
        // console.log("action.payload.title:",action.payload.title);
        // console.log("action.payload.id:",action.payload.id);
        // console.log("action.type:",action.type);
        console.log("state:",state);
        // console.log("state.articles:",state.articles);
        // console.log("state.articles[0]:",state.articles[0]);
        // if(state.articles[0]!==undefined) {
        //     if(state.articles[0].title!==undefined){
        //         console.log("state.articles[0].title:",state.articles[0].title);
        //     }
        //     if(state.articles[0].id!==undefined){
        //         console.log("state.articles[0].id:",state.articles[0].id);
        //     }
        // }
        return Object.assign({}, state, {
            // articles: state.articles.concat(action.payload)
            articles: state.articles.slice(1) // this removes the first entry of the arry.
        });
    }
    return state;
}

export default rootReducer;