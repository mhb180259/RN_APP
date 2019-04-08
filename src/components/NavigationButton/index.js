import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Icon from '../Icon';

const xStyle = {
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 5,
};

const creatIcon = props => {
  const {
    name,
    size = 28,
    color = 'white',
  } = props;
  return <Icon name={name} style={xStyle} size={size} color={color} />;
};

const runCallback = options => {
  const {
    callback,
  } = options;
  const buttons =
    callback && typeof callback === 'function' ? (
      <TouchableOpacity onPress={callback}>{creatIcon(options)}</TouchableOpacity>
    ) : (
      creatIcon(options)
    );

  return buttons;
};

const NavigationButton = props => {
  const propsLength = props.length;
  let Buttons = null;
  if (propsLength >= 1) {
    props.map(item => {
      Buttons = runCallback(item);
      return null;
    });
  } else {
    Buttons = runCallback(props);
  }
  return Buttons;
};
export default NavigationButton;