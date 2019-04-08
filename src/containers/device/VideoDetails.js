/*eslint-disable*/
import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
} from 'react-native';
import VideoPlayer, {
  defaultVideoHeight,
  isSystemIOS,
  statusBarHeight,
} from "../../components/VideoPlayer/VideoPlayer.js";
import Orientation from "react-native-orientation";
import styles from './style';

export default class Back extends Component {
  static navigationOptions = {
    headerTitle: 'Cue-47D9',
  };

  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      videoHeight: defaultVideoHeight,
    };
    BackHandler.addEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.addOrientationListener(this._orientationDidChange);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  render() {
    return (
      <View style={styles.videoContainer} onLayout={this._onLayoutChange}>
        <View style={styles.videoTop}>
          <VideoPlayer
            ref={(ref) => this.videoPlayer = ref}
            videoURL="https://vfx.mtime.cn/Video/2017/03/31/mp4/170331093811717750.mp4"
            onChangeOrientation={this._onOrientationChanged}
            onTapBackButton={this._onClickBackButton}
          />
        </View>
        <View style={styles.videoBottom} />
      </View>
    );
  }

  _backButtonPress = () => {
    if (this.state.isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      this.props.navigation.goBack();
    }
    return true;
  };
  _onOrientationChanged = (isFullScreen) => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscapeRight();
    }
  };
  _onClickBackButton = () => {
    this.props.navigation.goBack();
  };
  _onLayoutChange = (event) => {
    const {
      x,
      y,
      width,
      height,
    } = event.nativeEvent.layout;
    const isLandscape = (width > height);
    if (isLandscape) {
      this.setState({
        isFullScreen: true,
        videoHeight: height,
      });
      this.videoPlayer.updateLayout(width, height, true);
    } else {
      this.setState({
        isFullScreen: false,
        videoHeight: width * 9 / 16,
      });
      this.videoPlayer.updateLayout(width, width * 9 / 16, false);
    }
    Orientation.unlockAllOrientations();
  };
  _orientationDidChange = (orientation) => {
    if (orientation === 'PORTRAIT') {

    } else {

    }
  };
}