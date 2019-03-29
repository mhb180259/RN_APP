import React, { Component, } from 'react';
import { BackHandler, ToastAndroid, } from 'react-native';
import { connect, } from 'react-redux';
import { NavigationActions, } from 'react-navigation';
import Routers from '../routers';

@connect(state => ({ nav: state.nav, }))
export default class AppNavigationState extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    this.lastBackPressed = null;
  }

  onBackPress = () => {
    const { dispatch, nav, } = this.props;
    if (nav.index === 0) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        return false;
      }
      this.lastBackPressed = Date.now();
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <Routers />
    );
  }
}
