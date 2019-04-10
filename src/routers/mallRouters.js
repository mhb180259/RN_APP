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
    Home: pages.Home,
    Category: pages.Category,
    Cart: pages.Cart,
    MyMall: pages.MyMall,
  },
  BottomTabNavigatorConfig({
    initialRouteName: 'Home',
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
    // VideoDetails: pages.VideoDetails,
  },
  StackNavigatorConfig({
    initialRouteName: 'Root',
  }),
);

export default createAppContainer(AppStack);