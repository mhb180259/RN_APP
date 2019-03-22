import { createBottomTabNavigator, createStackNavigator, createAppContainer, } from 'react-navigation';
import { BottomTabNavigatorConfig, StackNavigatorConfig, } from '../config/navigationConfig';
import * as pages from './path';


const TabNav = createBottomTabNavigator(
  {
    Mo: pages.Mo,
    Zi: pages.Zi,
    Gong: pages.Gong,
    Cheng: pages.Cheng,
  },
  BottomTabNavigatorConfig({
    initialRouteName: 'Mo',
  }),
);

TabNav.navigationOptions = ({ navigation, }) => {
  // 设置tabBar的标题
  const { routes, index, } = navigation.state;
  const { routeName, } = routes[index];
  return pages[routeName].navigationOptions;
};

const AppStack = createStackNavigator(
  {
    Root: TabNav,
    Back: pages.Back,
  },
  StackNavigatorConfig({
    initialRouteName: 'Root',
  }),
);

export default createAppContainer(AppStack);
