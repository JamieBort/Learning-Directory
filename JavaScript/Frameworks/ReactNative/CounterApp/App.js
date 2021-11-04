import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CounterApp from './CounterApp';

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
			<CounterApp />

			// <View style={styles.container}>
			// 	<View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
			// 		<TouchableOpacity onPress={() => this.increaseCounter()}>
			// 			<Text style={{ fontSize: 20 }}>Increase</Text>
			// 		</TouchableOpacity>
			// 		<Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
			// 		<TouchableOpacity onPress={() => this.decreaseCounter()}>
			// 			<Text style={{ fontSize: 20 }}>Decrease</Text>
			// 		</TouchableOpacity>
			// 	</View>
			// </View>
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

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<Text>Open up App.js to start working on your app!</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });
