import React, {
  Component,
} from 'react';
import {
  Provider,
} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './redux/store/configureStore';
import './language';
import App from './containers/index';
export const store = configureStore();
export default class Root extends Component {
  componentDidMount() {
    SplashScreen.hide(); // 隐藏启动屏
  }
  render() {
    return (<Provider store={store}>
        <App />
      </Provider>);
  }
}
