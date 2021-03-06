import React from 'react';
import {
  Image,
  View,
  Text
} from 'react-native';
import * as types from '../redux/constants/actionTypes';
import NavigationButton from '../components/NavigationButton';
import {
  tabBar,
  window,
} from './appConfig';
import {
  store
} from '../root.js';
import {
  IconFont
} from '../components';
const BottomTabNavigatorConfig = options => {
  const {
    inactiveTintColor,
    activeTintColor,
    list,
  } = tabBar;
  const {
    initialRouteName = '', showIcon = true,
  } = options;
  return {
    initialRouteName,
    tabBarOptions: {
      inactiveTintColor,
      activeTintColor,
      showLabel: true,
      showIcon,
      indicatorStyle: {
        height: 0,
      },
      style: {
        height: 49,
        margin: 0,
        padding: 0,
        borderTopColor: "#F0F0F0",
        borderTopWidth: 1,
      },
      labelStyle: {
        fontSize: 12,
        margin: 0,
        padding: 0,
      },
    },
    defaultNavigationOptions: ({
      navigation,
    }) => {
      const {
        routeName,
      } = navigation.state;
      const {
        icoName,
        text,
      } = list[routeName];
      if (routeName !== 'Add') {
        return {
          tabBarIcon: ({
            tintColor,
          }) => {
            if (text === 'Mall') {
              return <NavigationButton callback={() => {
                store.dispatch({type: types.GO_MALL, gomall: true})
              }} name={icoName} size={24} color={tintColor} usename />;
            } else {
              return <NavigationButton name={icoName} size={24} color={tintColor} usename />
            }
          },
          tabBarLabel: text,
        };
      }
      return {
        tabBarIcon: () => {
          return <Image style={{ width: 50, height: 50, marginTop: -20,}} source={require('../assets/img/add.png')} />;
        },
        tabBarLabel: text,
      };
    },
  };
};
const StackNavigatorConfig = options => {
  const {
    initialRouteName = '',
  } = options;
  const {
    headerBackTitle = null, headerTintColor = '#FFFFFF', gesturesEnabled = true, headerBackgroundColor = '#262a37', headerTitleStyle = {
      alignSelf: 'center',
      fontSize: 18,
      flex: 1,
      textAlign: 'center',
      color: '#FFFFFF',
    },
  } = window || {};
  return {
    initialRouteName,
    mode: 'card', // 页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
    headerMode: 'float', // float - 渐变，类似iOS的原生效果;screen - 标题与屏幕一起淡入淡出;none - 没有动画
    cardStyle: {
      backgroundColor: '#F5FCFF',
    }, // 为各个页面设置统一的样式，比如背景色，字体大小等
    defaultNavigationOptions: ({
      navigation,
    }) => {
      const {
        routeName,
      } = navigation.state;
      return {
        headerRight: routeName === 'Root' ? (<IconFont name="tips" size={16} style={{color: '#fff', marginRight: 10}}/>) : (<IconFont onPress={() => {
                store.dispatch({type: types.GO_MALL, gomall: false})
              }} name="device" size={16} style={{color: '#fff', marginRight: 10}}/>),
        headerBackTitle, // 返回按钮文字
        headerTintColor, // 返回按钮颜色
        gesturesEnabled, // 是否支持滑动返回
        headerTitleStyle,
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
      };
    },
  };
};
module.exports = {
  BottomTabNavigatorConfig,
  StackNavigatorConfig,
};
