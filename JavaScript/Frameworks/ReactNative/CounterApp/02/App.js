import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

state = {
	amount: 0,
};

export default function App() {
	// state = {
	// 	amount: 0,
	// };
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => console.log('increased')}>
				<Text>Increase</Text>
			</TouchableOpacity>
			<Text>{this.state.amount}</Text>
			<TouchableOpacity onPress={() => console.log('decreased')}>
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
});
