import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import CounterApp from './CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNTER':
			return { counter: state.counter + 1 };
		case 'DECREASE_COUNTER':
			return { counter: state.counter - 1 };
	}
	return state;
};

const store = createStore(reducer);

class App extends React.Component {
	// state = {
	// 	counter: 0
	// };

	// increaseCounter = () => {
	// 	this.setState({ counter: this.state.counter + 1 });
	// };

	// decreaseCounter = () => {
	// 	if (this.state.counter > 0) {
	// 		this.setState({ counter: this.state.counter - 1 });
	// 	}
	// };

	render() {
		return (
			<Provider store={store}>
				<CounterApp />
			</Provider>
		);
	}
}
export default App;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		// backgroundColor: 'red',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });
