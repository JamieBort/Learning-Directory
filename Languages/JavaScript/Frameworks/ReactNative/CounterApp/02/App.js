import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class App extends Component {
	state = {
		counter: 0,
	};

	increasedCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
		console.log('this.state.counter: ', this.state.counter);
	};

	decreasedCounter = () => {
		this.setState({ counter: this.state.counter - 1 });
		console.log('this.state.counter: ', this.state.counter);
	};
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={() => this.increasedCounter()} style={styles.touchableOpacity}>
					<Text>Increase</Text>
				</TouchableOpacity>
				<Text>{this.state.counter}</Text>
				<TouchableOpacity onPress={() => this.decreasedCounter()} style={styles.touchableOpacity}>
					<Text>Decrease</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
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
});
