import {
  createIconSet,
} from 'react-native-vector-icons';
import iconMap from '../../config/iconfont.json';

const iconSet = createIconSet(iconMap, 'iconfont', 'iconfont.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;