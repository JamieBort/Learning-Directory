// src/js/actions/index.js

// You can notice that the type property is a string. Strings are prone to typos and duplicates and for this reason it's better to declare actions as constants. 
// See src/js/constants/action-types.js

// export function addArticle(payload) { // *** Commened out to address the above issue. ***
//     return { type: "ADD_ARTICLE", payload }
//   };

import { ADD_ARTICLE } from "../constants/action-types";
import { REMOVE_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function removeArticle(payload) {
    return { type: REMOVE_ARTICLE, payload };
  }