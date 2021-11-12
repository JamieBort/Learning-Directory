// src/js/reducers/index.js

import { ADD_ARTICLE } from '../constants/action-types';

// const initialState = {
//     articles: [],
// }

const initialState = {
	articles: [
		{
			id: -2,
			title: 'First default title!',
		},
		{
			id: -1,
			title: 'Second default title!',
		},
	],
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		// state.articles.push(action.payload);
		return Object.assign({}, state, {
			articles: state.articles.concat(action.payload),
		});
	}
	return state;
}

export default rootReducer;
