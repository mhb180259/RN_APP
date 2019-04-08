import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {
  BottomTabNavigatorConfig,
  StackNavigatorConfig,
} from '../config/navigationConfig';
import * as pages from './path';


const TabNav = createBottomTabNavigator({
  Device: pages.Device,
  Message: pages.Message,
  Add: pages.Add,
  Mall: pages.Mall,
  Me: pages.Me,
},
BottomTabNavigatorConfig({
  initialRouteName: 'Device',
}),
);

TabNav.navigationOptions = ({
  navigation,
}) => {
  // 设置tabBar的标题
  const {
    routes,
    index,
  } = navigation.state;
  const {
    routeName,
  } = routes[index];
  return pages[routeName].navigationOptions;
};

const AppStack = createStackNavigator({
  Root: TabNav,
  VideoDetails: pages.VideoDetails,
},
StackNavigatorConfig({
  initialRouteName: 'Root',
}),
);

export default createAppContainer(AppStack);