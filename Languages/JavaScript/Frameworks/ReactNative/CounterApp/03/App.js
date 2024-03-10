import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const App = () => {
	const [ value, setValue ] = useState(0);

	const addOne = () => {
		console.log('Up!');
		setValue(value + 1);
	};
	const subtractOne = () => {
		console.log('Down!');
		setValue(value - 1);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.result}>{value}</Text>
			{/* <TouchableOpacity onPress={() => setValue(value + 1)} style={styles.touchableOpacity}> */}
			<TouchableOpacity onPress={() => addOne()} style={styles.touchableOpacity}>
				<Text>Increment Value</Text>
			</TouchableOpacity>
			{/* <TouchableOpacity onPress={() => setValue(value - 1)} style={styles.touchableOpacity}> */}
			<TouchableOpacity onPress={() => subtractOne()} style={styles.touchableOpacity}>
				<Text>Increment Value</Text>
			</TouchableOpacity>
		</View>
	);
};
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightyellow',
		alignItems: 'center',
		justifyContent: 'center',
	},
	touchableOpacity: {
		backgroundColor: 'green',
		padding: 20,
	},
	result: {
		backgroundColor: 'lightgreen',
		padding: 20,
	},
});
