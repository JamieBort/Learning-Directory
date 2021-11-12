// src/js/index.js
 // I kept this. It was an instruction from previously in the tutorial.

import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

window.store = store;
window.addArticle = addArticle;