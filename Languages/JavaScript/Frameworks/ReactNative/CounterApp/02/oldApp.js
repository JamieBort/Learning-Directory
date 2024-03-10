import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// var state = {
// 	amount: 0,
// };

// function myIncreasedFunction() {
// 	console.log('increased state.amount: ', state.amount);
// 	state.amount++;
// 	console.log('state.amount: ', state.amount);
// }
// function myDecreasedFunction() {
// 	console.log('decreased state.amount: ', state.amount);
// 	state.amount--;
// 	console.log('state.amount: ', state.amount);
// }

export default function App() {
	const [ state, setState ] = useState({
		amount: 10,
	});

	// const state = {
	// 	amount: 0,
	// };

	function myIncreasedFunction() {
		console.log('increased state.amount: ', state.amount);
		// state.amount++;
		// (this.state.amount = this.state.amount++),
		// state.amount = state.amount++;
		setState((state) => ({
			amount: state.amount++,
		}));
		console.log('state.amount: ', state.amount);
	}
	function myDecreasedFunction() {
		console.log('decreased state.amount: ', state.amount);
		state.amount--;
		// setState({
		// 	amount: state.amount--,
		// });
		console.log('state.amount: ', state.amount);
	}
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={myIncreasedFunction} style={styles.touchableOpacity}>
				<Text>Increase</Text>
			</TouchableOpacity>
			<Text>{state.amount}</Text>
			<TouchableOpacity onPress={myDecreasedFunction} style={styles.touchableOpacity}>
				<Text>Decrease</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightyellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
	touchableOpacity: {
		// flex: 1,
		backgroundColor: 'green',
		// height: 20,
		padding: 20,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
