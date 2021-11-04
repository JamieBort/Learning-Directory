import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TouchableOpacityBase } from 'react-native';

class App extends Component {
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
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

// const state = {
// 	num: 0
// };

// export default function App() {
// 	console.log('app executed');
// 	const increment = () => {
// 		console.log('original', state.num);
// 		state.num++;
// 		console.log('incremented', state.num);
// 	};
// 	const decrement = () => {
// 		console.log('original', state.num);
// 		state.num--;
// 		console.log('decremented');
// 	};

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<Text>Open up App.js to start working on your app!</Text>
// 			<Button title="Increment" onPress={increment} />
// 			<Text>{state.num}</Text>
// 			<Button title="Decrement" onPress={decrement} />
// 			<StatusBar style="auto" />
// 		</SafeAreaView>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: 'dodgerblue',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });
