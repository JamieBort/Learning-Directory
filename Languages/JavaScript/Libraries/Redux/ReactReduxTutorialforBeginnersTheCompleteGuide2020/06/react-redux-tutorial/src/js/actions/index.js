// src/js/actions/index.js

// As a best practice in Redux we wrap every action within a function, 
// so that object creation is abstracted away. 
// Such function takes the name of action creator:

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