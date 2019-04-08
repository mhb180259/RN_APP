import React, {
  Component,
} from 'react';
import {
  View,
  Text,
} from 'react-native';


export default class Zi extends Component {
  static navigationOptions = {
    headerTitle: '设备',
  };
  render() {
    return (
      <View>
        <Text>{global.I18n.t('lang')}</Text>
      </View>
    );
  }
}