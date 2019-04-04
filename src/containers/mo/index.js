/*eslint-disable*/
import React, {
  Component,
} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  VideoPlayer,
} from "../../components";
import Video from './video';
import styles from './style';

export default class Mo extends Component {
  static navigationOptions = {
    headerTitle: '首页',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <VideoPlayer
          source={{ uri: 'https://vfx.mtime.cn/Video/2017/03/31/mp4/170331093811717750.mp4', }}
        /> */}
        <Text onPress={this._goPage}>点击去下一页</Text>
      </View>
    );
  }
  _goPage = () => {
    const {
      navigation,
    } = this.props;
    navigation.navigate('Back');
  }
}