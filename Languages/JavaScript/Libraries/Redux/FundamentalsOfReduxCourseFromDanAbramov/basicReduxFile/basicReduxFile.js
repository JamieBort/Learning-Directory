// ./basicReduxFile/basicReduxFile.js

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

const { createStore } = Redux;
const store = createStore(counter);
const render = () => {
	document.getElementById('output').innerHTML = store.getState();
	console.log(store.getState());
};
up = () => {
	store.dispatch({ type: 'INCREMENT' });
};
down = () => {
	store.dispatch({ type: 'DECREMENT' });
};
store.subscribe(render);
render();
