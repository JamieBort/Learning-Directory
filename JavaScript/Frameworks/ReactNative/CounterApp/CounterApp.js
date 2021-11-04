import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends React.Component {
	// state = {
	// 	counter: 0
	// };

	// increaseCounter = () => {
	// 	this.setState({ counter: this.state.counter + 1 });
	// };

	// decreaseCounter = () => {
	// 	// this.setState({ counter: this.state.counter - 1 });

	// 	if (this.state.counter > 0) {
	// 		this.setState({ counter: this.state.counter - 1 });
	// 	} else {
	// 		this.setState({ counter: 0 });
	// 	}
	// };

	render() {
		return (
			// <h1>Hi</h1>
			<View style={styles.container}>
				<View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
					<TouchableOpacity onPress={() => this.props.increaseCounter()}>
						<Text style={{ fontSize: 20 }}>Increase</Text>
					</TouchableOpacity>
					<Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
					<TouchableOpacity onPress={() => this.props.decreaseCounter()}>
						<Text style={{ fontSize: 20 }}>Decrease</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

function mapStateToProps(state) {
	return {
		counter: state.counter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
		decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
