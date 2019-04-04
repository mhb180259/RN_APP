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
export default class Back extends Component {
  static navigationOptions = {
    headerTitle: null,
    headerStyle: {
      height: 0,
    },
  };
  goBack = () => {
    this.props.navigation.navigate('Mo');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            this.goBack();
          }}
        >
          返回到首页
        </Text>
      </View>
    );
  }
}