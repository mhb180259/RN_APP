import React, {
  Component,
} from 'react';
import {
  View,
} from 'react-native';
import {
  VideoPlayer,
} from "../../components";
import styles from './style';

export default class Mo extends Component {
  static navigationOptions = {
    headerTitle: '首页',
  };

  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer
          source={{ uri: 'https: //vfx.mtime.cn/Video/2017/03/31/mp4/170331093811717750.mp4', }}
        />
      </View>
    );
  }
}