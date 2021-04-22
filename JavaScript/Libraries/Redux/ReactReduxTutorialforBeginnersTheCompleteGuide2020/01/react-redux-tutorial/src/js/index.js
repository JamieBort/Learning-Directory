// src/js/index.js

// The most important methods are just three:
// * **getState** for reading the current state of the application
// * **dispatch** for dispatching an action
// * **subscribe** for listening to state changes

// We will play in the browser’s console with them. To do so we need to export the store and the action we created as global variables. Create a new file named src/js/index.js and place there the following code:

import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
import { removeArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;
window.removeArticle = removeArticle;