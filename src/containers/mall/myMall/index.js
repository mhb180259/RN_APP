import React, {
	Component,
} from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

export default class Gong extends Component {
	static navigationOptions = {
		headerTitle: 'my',
	};
	render() {
		return (
			<View style={styles.container}>
        <Text style={styles.welcome}>my</Text>
      </View>
		);
	}
}