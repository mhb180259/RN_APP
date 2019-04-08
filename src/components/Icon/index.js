import React from 'react';
import IconFont from "../IconFont";

const TYPES = {
  ionicons: IconFont,
};

export default props => {
  const {
    source = 'ionicons', ...others
  } = props;
  const Icon = TYPES[source.toLowerCase()];
  return <Icon {...others} />;
};