// src/js/actions/index.js

// type property drives how the state should change
// type -> how

// payload property instead describes what should change
// payload -> what

import { ADD_ARTICLE } from "../constants/action-types"

export function addArticle(payload){
    return {
        type:"ADD_ARTICLE",
        payload,
    }
}