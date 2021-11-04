import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CounterApp extends React.Component {
	state = {
		counter: 0
	};

	increaseCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	decreaseCounter = () => {
		if (this.state.counter > 0) {
			this.setState({ counter: this.state.counter - 1 });
		}
	};

	render() {
		return (
			// <h1>Hi</h1>
			<View style={styles.container}>
				<View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
					<TouchableOpacity onPress={() => this.increaseCounter()}>
						<Text style={{ fontSize: 20 }}>Increase</Text>
					</TouchableOpacity>
					<Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
					<TouchableOpacity onPress={() => this.decreaseCounter()}>
						<Text style={{ fontSize: 20 }}>Decrease</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
export default CounterApp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
